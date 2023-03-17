const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'], // Required for tsconfig baseUrl
  moduleNameMapper: { '^@public/(.*)$': '<rootDir>/public/$1' }, // Required for tsconfig paths
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/tests/e2e/'],
}

module.exports = createJestConfig(customJestConfig)
