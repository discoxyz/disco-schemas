module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "sourceType": "module"
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
