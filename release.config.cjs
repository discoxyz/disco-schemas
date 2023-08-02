require("dotenv").config();

export default {
  branches: [
    "main"
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "chore", release: "patch" },
          { type: "refactor", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
    [
      "semantic-release-slack-bot",
      {
        "notifyOnSuccess": true,
        "notifyOnFail": true,
      }
    ]
  ],
  preset: "conventionalcommits",
};
