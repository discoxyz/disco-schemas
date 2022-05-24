/** Loop through all the schemas and their versions in `./src/schemas/` and output corresponding JSON files into `./json/` */

import fs from "fs";
import { canonicalize } from "json-canonicalize";

const JSON_OUTPUT_DIR = "./json";
const SCHEMAS_DIR = "./src/schemas";
const SCHEMAS_RELATIVE_DIR = "./schemas"; // relative to this script

(async () => {
  const schemaNames = await fs.promises.readdir(SCHEMAS_DIR);
  for (const schemaName of schemaNames) {
    if (schemaName === "index.ts") {
      continue;
    }

    const schemaJsonOutputDir = `${JSON_OUTPUT_DIR}/${schemaName}`;
    if (!fs.existsSync(schemaJsonOutputDir)) {
      console.log("Creating folder", schemaJsonOutputDir);
      fs.mkdirSync(schemaJsonOutputDir, { recursive: true });
    }

    const schemaFiles = await fs.promises.readdir(`${SCHEMAS_DIR}/${schemaName}`);
    for (const schemaFile of schemaFiles) {
      if (!schemaFile.match(/\.ts$/)) {
        continue;
      }
      const version = schemaFile.replace(/\.ts$/, "");

      console.log("Generating JSON for", schemaName, "version", version);

      // unlike `fs`, `require` is relative to the script being run
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const schema = require(`${SCHEMAS_RELATIVE_DIR}/${schemaName}/${version}`).default;

      if (schema.$id && !schema.$id.includes(schemaName)) {
        throw Error(
          `The "$id" property of schema "${schemaName}" version ${version} will not resolve since it does not include its name! $id is: ${schema.$id}`,
        );
      }

      const prettyJson = JSON.stringify(JSON.parse(canonicalize(schema)), null, 2);

      fs.writeFileSync(`${schemaJsonOutputDir}/${version}.json`, prettyJson);
    }
  }
})();
