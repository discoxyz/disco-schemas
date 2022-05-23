module.exports = {
  preset: "ts-jest",

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

  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/src/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    '\\.(ts)$': 'ts-jest'
  },
}