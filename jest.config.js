module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  testRegex: '\\.spec\\.ts$',
  setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',
  transformIgnorePatterns: ['node_modules/(?!@ngrx|@ionic-native|@ionic)']
};
