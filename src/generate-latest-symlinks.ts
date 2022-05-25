/** Loop through all schema folders and ensure there is a symlink `latest.ts` pointing to the latest version. This is so that the latest version of each schema can be exported by this module and hosted at a consistent URL. */

import fs from "fs";

const SCHEMAS_DIR = "./src/schemas";

(async () => {
  const schemaNames = await fs.promises.readdir(SCHEMAS_DIR);
  for (const schemaName of schemaNames) {
    if (schemaName === "index.ts") {
      continue;
    }

    const schemaFiles = await fs.promises.readdir(`${SCHEMAS_DIR}/${schemaName}`);

    // Versions are MODEL-REVISION-ADDITION, e.g. 1-0-0 or 2-1-10 - see https://docs.snowplowanalytics.com/docs/pipeline-components-and-applications/iglu/common-architecture/schemaver/
    const schemaVersions = schemaFiles
      .filter((fileName) => fileName !== "latest.ts")
      .map((fileName) =>
        fileName
          .replace(/\.ts$/, "")
          .split("-")
          .map((s) => parseInt(s, 10)),
      );

    const modelNums = schemaVersions.map((version) => version[0]);
    const highestModelNum = Math.max(...modelNums);
    let remainingVersions = schemaVersions.filter((version) => version[0] === highestModelNum);

    const revisionNums = remainingVersions.map((version) => version[1]);
    const highestRevisionNum = Math.max(...revisionNums);
    remainingVersions = remainingVersions.filter((version) => version[1] === highestRevisionNum);

    const additionNums = remainingVersions.map((version) => version[2]);
    const highestAdditionNum = Math.max(...additionNums);
    remainingVersions = remainingVersions.filter((version) => version[2] === highestAdditionNum);

    if (remainingVersions.length !== 1) {
      console.error("Failed to identify latest version for", schemaName, schemaVersions);
      throw Error("Somehow failed to identify latest version!");
    }

    const latestVersion = remainingVersions[0].join("-");

    console.log(`Symlinking latest version ${latestVersion} for ${schemaName}`);

    const linkTarget = `${latestVersion}.ts`;
    const linkName = `${SCHEMAS_DIR}/${schemaName}/latest.ts`;

    let linkExists = false;
    try {
      linkExists = !!fs.readlinkSync(linkName);
    } catch {
      /* doesn't exist */
    }
    if (linkExists) {
      await fs.promises.unlink(linkName);
    }

    await fs.promises.symlink(linkTarget, linkName, "file");
  }
})();
