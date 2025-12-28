const accountsApi = require('../../../core/api/accountsApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('authService', () => {
  test('accountsApi.post está disponible', () => {
    expect(accountsApi.post).toBeDefined();
  });
});