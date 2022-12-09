module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        // parser: "espree",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        "vue/script-setup-uses-vars": "error",
    },
};
