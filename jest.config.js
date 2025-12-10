module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/test/**/*.test.ts'],
	slowTestThreshold: 10, // em segundos
	collectCoverage: true,
	// collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	moduleNameMapper: {
		'^@/test/(.*)': '<rootDir>/test/$1',
		'^@/(.*)': '<rootDir>/src/$1',
	},
}
