module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		"**/src/**/*.{ts,tsx,js,jsx}",
		"**/test/**/*.{ts,tsx,js,jsx}",
		"!**/.wip/**",
		"!**/node_modules/**"
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90
		}
	},
	testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
	testPathIgnorePatterns: ["<rootDir>/*/.wip", "<rootDir>/*/__fixtures__"],
	transform: {
		"^.+\\.(t|j)sx?$": "ts-jest"
	},
	passWithNoTests: true,
	verbose: true
};
