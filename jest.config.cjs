module.exports = {
  preset: "ts-jest/presets/default-esm",
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'index.ts',
    '/node_modules/'
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/src/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    '\\.js$': 'babel-jest',
    '\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },

  transformIgnorePatterns: ['node_modules/(?!@sindresorhus|escape-string-regexp)'],
}