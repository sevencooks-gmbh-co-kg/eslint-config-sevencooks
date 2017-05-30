/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    extends: [
        "peerigon/react",
        "plugin:import/react"
    ],
    rules: {
        /* eslint-enable sort-keys */
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-curly-spacing": [2, "always", { "allowMultiline": true }],
        "react/jsx-max-props-per-line": [2, { "maximum": 3 }],
        "react/prefer-es6-class": [2, "always"],
    }
};
