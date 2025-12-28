const registerUser = require('../services/registerService').default;
const accountsApi = require('../../../core/api/accountsApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('registerService', () => {
  test('registerUser llama api.post', async () => {
    accountsApi.post.mockResolvedValue({ data: {} });
    await registerUser({ email: 'test@test.com' });
    expect(accountsApi.post).toHaveBeenCalled();
  });
});