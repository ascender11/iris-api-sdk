import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['<rootDir>/tests/unit/*.spec.ts'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: { '^src/(.*)$': '<rootDir>/src/$1' },
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  coverageDirectory: '<rootDir>/coverage',
};

export default config;
