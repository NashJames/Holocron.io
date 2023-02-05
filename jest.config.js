const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const customJestConfig = {
  // Required for tsconfig baseUrl
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // Required for tsconfig paths
  moduleNameMapper: { '^@public/(.*)$': '<rootDir>/public/$1' },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/tests/e2e/'],
}

module.exports = createJestConfig(customJestConfig)
