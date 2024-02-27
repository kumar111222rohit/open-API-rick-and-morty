import '@testing-library/jest-dom';
jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
      // Your runtime config values here
      localeSubpaths: {},
      // Any other publicRuntimeConfig values your app expects
    },
  }));
  