import "jest";
import fetchMock from "jest-fetch-mock";
import { getAndValidateSchemaFromVc, validateVcAgainstSchema } from "./validateVc";
import { AccountLinkageCredential } from "./schemas";
import { VC } from "./types";

const vc: VC = {
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  type: ["VerifiableCredential", "AccountLinkageCredential"],
  issuer: { id: "did:ethr:0x02f4b0ceed160cccb47a66951baffac8a8ace75c33b761beb545e3ec99f44300fd" },
  issuanceDate: "2022-04-13T11:32:41.000Z",
  credentialSubject: {
    id: "did:ethr:0x02f4b0ceed160cccb47a66951baffac8a8ace75c33b761beb545e3ec99f44300fc",
    type: "Twitter",
    username: "example_username",
  },
  credentialSchema: {
    id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/1-0-0.json",
    type: "JsonSchemaValidator2018",
  },
};

beforeEach(() => {
  fetchMock.enableMocks();
  fetchMock.mockResponse(JSON.stringify(AccountLinkageCredential));
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
  fetchMock.mockResponse(() => Promise.reject(new Error("nope")));
  const { valid, errors } = await getAndValidateSchemaFromVc(vc);
  expect(valid).toBe(false);
  expect(errors.length).toBe(1);
  expect(errors[0]).toMatch(/Failed to (load|fetch) JSON Schema/);
});
it("should error on non-200 response when fetching JSON Schema", async () => {
  fetchMock.mockResponse(() => Promise.resolve({ status: 404 }));
  const { valid, errors } = await getAndValidateSchemaFromVc(vc);
  expect(valid).toBe(false);
  expect(errors.length).toBeGreaterThanOrEqual(1);
  expect(errors[0]).toMatch(/404 response when fetching JSON Schema/);
});
