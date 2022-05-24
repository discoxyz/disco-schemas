export const baseVcJsonSchema = {
  type: "object",
  required: ["@context", "type", "issuer", "issuanceDate", "credentialSubject"],
  properties: {
    "@context": {
      anyOf: [{ type: "string" }, { type: "array" }, { type: "object" }],
    },
    id: {
      type: "string",
      format: "uri",
    },
    type: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    issuer: {
      anyOf: [
        {
          type: "string",
          format: "uri",
        },
        {
          type: "object",
          required: ["id"],
          properties: {
            id: {
              type: "string",
              format: "uri",
            },
          },
        },
      ],
    },
    issuanceDate: {
      type: "string",
      format: "date-time",
    },
    expirationDate: {
      type: "string",
      format: "date-time",
    },
    credentialSubject: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uri",
        },
      },
    },
    credentialSchema: {
      type: "object",
      required: ["id", "type"],
      properties: {
        id: {
          type: "string",
          format: "uri",
        },
        type: {
          type: "string",
        },
      },
    },
  },
};

