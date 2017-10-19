/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    "jsdoc",
    "import"
  ],
  extends: [
    "eslint:recommended",
    "standard",
    "prettier/standard"
  ],
  rules: {
    /* eslint-enable sort-keys */
  }
};
