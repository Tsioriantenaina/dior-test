// import type { Config } from "@jest/types";
const nextJest = require("next/jest");

const creatJestConfig = nextJest({
	dir: "./",
});

const config = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	setupFiles: ["<rootDir>/.jest/setupEnvVars.js"],
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/app/(.*)$": "<rootDir>/app/$1",
		"^@/hooks/(.*)$": "<rootDir>/hooks/$1",
		"^@/providers/(.*)$": "<rootDir>/providers/$1",
		"^@/utility/(.*)$": "<rootDir>/utility/$1",
		//hamdle css imports (without css module)
		"^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
		//handle image imports
		"^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
	},
	testEnvironment: "jest-environment-jsdom",
	//Since we use typeScripte
	preset: "ts-jest",
	modulePaths: ["<rootDir>"],
};

module.exports = creatJestConfig(config);
