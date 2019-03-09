/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react-hooks",
  ],
  extends: [
    "standard-react",
    // This disables rules Prettier takes care of
    "prettier/react",
  ],
  rules: {
    /* eslint-enable sort-keys */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
