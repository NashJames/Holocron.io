import { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: '../' })

const customJestConfig: Config = {
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
  }, // Required for tsconfig paths
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/tests/e2e/'],
}

export default createJestConfig(customJestConfig)
