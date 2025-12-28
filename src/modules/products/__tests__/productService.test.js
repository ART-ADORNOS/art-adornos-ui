const getProducts = require('../services/productService').default;
const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('productService', () => {
  test('getProducts llama apiStore.get', async () => {
    apiStore.get = jest.fn().mockResolvedValue({ data: [] });
    await getProducts('1');
    expect(apiStore. get).toHaveBeenCalled();
  });
});