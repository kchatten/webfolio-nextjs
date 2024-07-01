import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    // Inclusions
    'app/components/**/*.{js,jsx,ts,tsx}',
    'app/layout.tsx', 
    // Exclusions
    '!**/*.d.ts', // Exclude type definitions
    '!**/*.config.{cjs,mjs,js,jsx,ts,tsx}', // Exclude config definitions
    '!**/node_modules/**', // Exclude node_modules
    '|**/app/components/__tests__/**', // Exclude test cases
    '|**/app/coverage/**', // Exclude coverage directory
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
