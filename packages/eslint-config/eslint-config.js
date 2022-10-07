module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended"],
	ignorePatterns: [".turbo", "coverage", "dist", "test", ".eslintrc.js"],
	plugins: ["@typescript-eslint"]
};
