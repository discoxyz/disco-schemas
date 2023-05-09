# Disco Schemas

These are [JSON Schemas](https://json-schema.org/) that define [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/).

Available schemas can be found in the `json/` directory and can either be referenced directly from this git repo by their URL (e.g. https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/1-0-0.json) or can be imported from this package.

## Installation

```bash
yarn add disco-schemas
# or
npm install disco-schemas
```

## Example usage

```js
import {
  validateVcAgainstSchema,
  getAndValidateSchemaFromVc,
  AccountLinkageCredential,
  EXAMPLE_VC,
} from "disco-schemas";

(async function () {
  let valid, errors, schema;

  // Validate against a particular schema
  ({ valid, errors } = await validateVcAgainstSchema(EXAMPLE_VC, AccountLinkageCredential));
  console.log("VC is valid according to schema:", valid);
  console.log("Validation errors:", errors);

  // Validate against the schema the VC references in its `credentialSchema` field, and return that schema
  ({ valid, errors, schema } = await getAndValidateSchemaFromVc(EXAMPLE_VC));
  console.log("VC references schema:", schema);
  console.log("VC is valid according to schema:", valid);
  console.log("Validation errors:", errors);

  // Example validation error
  delete EXAMPLE_VC.credentialSubject.username;
  ({ valid, errors } = await validateVcAgainstSchema(EXAMPLE_VC, AccountLinkageCredential));
  console.log("VC is valid according to schema:", valid);
  console.log("Validation errors:", errors);
})();
```

## Referencing schemas in a Verifiable Credential

The [`credentialSchema` property](https://www.w3.org/TR/vc-data-model/#data-schemas) can hold a reference to a JSON Schema by its URL. For example:

```js
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  type: ["VerifiableCredential", "AccountLinkageCredential"],
  ...
  credentialSubject: { ... },
  credentialSchema: {
    id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/1-0-0.json",
    type: "JsonSchemaValidator2018",
  },
}
```

The `addSchemaToVc` function can be used to automatically add the `credentialSchema` field and, optionally, append its name to `type` (note: adding to `type` this way is not strictly compliant with the VC standard, which requires that `type` values must dereference to a URI via the JSON-LD @context).

## Versioning

Schema objects exported by this package always use the latest version, but schema JSON is available both at versioned URLs and at a pointer to the latest version:

- https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/1-0-0.json
- https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/latest.json

Versions are defined as MODEL-REVISION-ADDITION. See https://docs.snowplowanalytics.com/docs/pipeline-components-and-applications/iglu/common-architecture/schemaver/ for more info.

## Development

First, install Yarn and then install dependencies:

```bash
yarn install
```

### Adding a new schema

See the [JSON Schema introduction](https://json-schema.org/learn/getting-started-step-by-step.html) for information about the standard, and you can use [this online editor](https://rjsf-team.github.io/react-jsonschema-form/) to try editing JSON Schema live.

To add a new schema:

1. Determine the schema title and folder name
    - The title should end in " Credential" and the folder should be a PascalCase version of that title
    - E.g. title "Event Ticket Credential" -> folder "EventTicketCredential"
    - This follows the [VC standard's type naming convention](https://www.w3.org/TR/vc-data-model/#types)
1. Create a folder in `src/schemas/` for your new schema with the PascalCase folder name
1. Copy a schema version from another schema into this folder. Call it `1-0-0.ts` for the first version
1. Update the schema! Make sure to change the following values:
    - `$id` - replace the schema name and version at the end of this URL with the folder name and version number
    - `title` (required) and `description` (required)
    - `credentialSubject` your schema goes here!
1. Add to the schema to `src/schemas/index.ts`
    - Import and export the schema
    - (Optional: add to `issuableSchemas` if it should be available from Disco app) <- We don't need to do this anymore!!
1. Make sure to run `yarn generate` before using the schema or committing changes

### Adding a new version of a schema

Each schema has a version number "MODEL-REVISION-ADDITION", e.g. "2-1-7". See the Versioning section for more information.

To add a new version:

1. Copy the last version to a new `.ts` file
1. Change the `$id` URL to match the new version number
1. Make your changes
1. Make sure to run `yarn generate` before using the schema or committing changes
2. `package.json` version will update on merge depending on the commit log
    - minor `chore: Description` , `fix: Description`
    - major `feat: Description`
    - While schemas are permanently available at versioned .json URLs, schemas exported by this module in code always refer to the latest version, so apps importing any changed schemas will get the updates when they update `disco-schemas`. As such, make sure to follow [SemVer](https://semver.org/) conventions when updating `package.json` version number.

### Notes

- The JSON Schema standard allows the addition of arbitrary properties, so one could for instance add a `$metadata` object into a schema definition if desired.
- Every schema currently builds off of `BaseVerifiableCredential` version 1-0-0. If a new version of that base schema is needed, schemas that need those updates should make sure to import the new version of it.
