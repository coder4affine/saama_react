module.export = {
  restoreMocks: true,

  clearMocks: true,

  resetMocks: true,

  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  coverageDirectory: 'coverage',

  moduleFileExtensions: ['js', 'json', 'jsx'],

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['/node_modules/', '/public/', 'output'],

  roots: ['<rootDir>/src'],

  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },

  setupFiles: ['<rootDir>/jest.setup.js'],

  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],

  verbose: false,
};
