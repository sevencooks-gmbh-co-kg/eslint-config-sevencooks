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
        "peerigon"
    ],
    rules: {
        /* eslint-enable sort-keys */
        "new-cap": [2, { "capIsNewExceptions": ["CSSModules"] }],
        "no-console": 2,
        "no-constant-condition": ["error", { "checkLoops": false }],
        "quotes": [2, "single", "avoid-escape"],
        "jsdoc/require-description-complete-sentence": 0,
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }]
    }
};
