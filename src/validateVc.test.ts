import { jest } from "@jest/globals";
import { Response } from "cross-fetch";
import { AccountLinkageCredential } from "./schemas/index.js";
import { EXAMPLE_VC } from "./helpers.js";

jest.unstable_mockModule('cross-fetch', () => {
  const fetchFunc = jest.fn(async (url: string, opts: any = {}) => ({
    ok: true,
    json: async () => {
      return { status: 200, body: EXAMPLE_VC.credentialSchema }
    },
  }))
  return {
    default: fetchFunc,
  }
})


const vc = EXAMPLE_VC;
let validateVcAgainstSchema: any;
let getAndValidateSchemaFromVc: any;

beforeAll( async () => {
  validateVcAgainstSchema = (await import("./validateVc.js")).validateVcAgainstSchema
  getAndValidateSchemaFromVc = await (await import("./validateVc.js")).getAndValidateSchemaFromVc
});

it("should validate VC against a schema", async () => {
  const { valid, errors } = await validateVcAgainstSchema(vc, AccountLinkageCredential);
  expect(valid).toBe(true);
  expect(errors.length).toBe(0);
});

it("should detect missing property from JSON Schema", async () => {
  const { valid, errors } = await validateVcAgainstSchema(
    {
      ...vc,
      credentialSubject: {
        ...vc.credentialSubject,
        username: undefined,
      },
    },
    AccountLinkageCredential,
  );
  expect(valid).toBe(false);
  expect(errors.length).toBe(1);
  expect(errors[0]).toMatch(/must have required property 'username'/);
});

it("should validate VC by its credentialSchema property", async () => {
  const fetch = await import("cross-fetch")
  jest.spyOn(fetch, "default").mockImplementation(()=> { return Promise.resolve(new Response(JSON.stringify(AccountLinkageCredential), { status: 200 }))})

  const { valid, errors, schema } = await getAndValidateSchemaFromVc(vc);
  expect(valid).toBe(true);
  expect(errors.length).toBe(0);
  expect(schema).toBeTruthy();
});

it("should error on missing `credentialSchema`", async () => {
  const { valid, errors } = await getAndValidateSchemaFromVc({
    ...vc,
    credentialSchema: undefined,
  });
  expect(valid).toBe(false);
  expect(errors.length).toBe(1);
  expect(errors[0]).toMatch(/No "credentialSchema" property found/);
});

it("should error on unsupported `credentialSchema.type`", async () => {
  const { valid, errors } = await getAndValidateSchemaFromVc({
    ...(vc as any),
    credentialSchema: {
      ...vc.credentialSchema,
      type: "SomethingElse",
    },
  });
  expect(valid).toBe(false);
  expect(errors.length).toBe(1);
  expect(errors[0]).toMatch(/not supported - expecting "JsonSchemaValidator2018"/);
});
it("should error on missing `credentialSchema.id`", async () => {
  const { valid, errors } = await getAndValidateSchemaFromVc({
    ...(vc as any),
    credentialSchema: {
      ...vc.credentialSchema,
      id: undefined,
    },
  });

  expect(valid).toBe(false);
  expect(errors.length).toBe(1);
  expect(errors[0]).toMatch(/"credentialSchema.id" property not found/);
});

it("should error on failure to fetch JSON Schema", async () => {
  const fetch = await import("cross-fetch")
  jest.spyOn(fetch, "default").mockImplementationOnce(()=> { return Promise.reject(Error("Nope"))})

  const { valid, errors } = await getAndValidateSchemaFromVc(vc);
  expect(valid).toBe(false);
  expect(errors.length).toBe(1);
  expect(errors[0]).toMatch(/Failed to (load|fetch) JSON Schema/);
});
it("should error on non-200 response when fetching JSON Schema", async () => {
  const fetch = await import("cross-fetch")
  jest.spyOn(fetch, "default").mockImplementationOnce(()=> { return Promise.resolve(new Response(undefined, { status: 404 }))})

  const { valid, errors } = await getAndValidateSchemaFromVc(vc);
  expect(valid).toBe(false);
  expect(errors.length).toBeGreaterThanOrEqual(1);
  expect(errors[0]).toMatch(/404 response when fetching JSON Schema/);
});
