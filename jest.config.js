const { defaults } = require("jest-config");

module.exports = {
	...defaults,
	moduleFileExtensions : [...defaults.moduleFileExtensions, "ts"],
	moduleNameMapper     : {
		"~/(.*)": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv : ["<rootDir>/src/Helpers/testHelper.ts"],
};
