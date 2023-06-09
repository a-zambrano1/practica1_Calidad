export default {
	verbose: true,
	roots: ['<rootDir>/src/', '<rootDir>/tests/'],
	preset: 'ts-jest',
	restoreMocks: true,
	testEnvironment: 'jsdom',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: ['vue', 'ts', 'js'],
	testMatch: ['**/tests/**/*.test.ts'],
	collectCoverageFrom: [
		'src/**/*.(ts(x)?|vue)',
		'!src/router/**',
		'!src/App.vue',
		'!**/*.d.ts',
		'!src/main.ts',
		'!src/components/modals/ModalView.vue',
	],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\.ts(x)?$': 'ts-jest',
	},
};
