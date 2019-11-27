/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: [
    "jsdoc",
    "import",
  ],
  extends: [
    "standard",
    // This disables rules Prettier takes care of
    "prettier",
    "prettier/standard",
  ],
  rules: {
    "no-console": "error",
  },
}
