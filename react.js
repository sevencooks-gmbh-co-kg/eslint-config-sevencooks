/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  plugins: [
    "react-hooks",
  ],
  extends: [
    "standard-react",
    "prettier/react",
  ],
  rules: {
    /* eslint-enable sort-keys */
    "react-hooks/rules-of-hooks": "error",
  },
};
