const { getCartService } = require('../service/getCartService');
const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('getCartService', () => {
  test('obtiene carrito', async () => {
    apiStore.get.mockResolvedValue({
      status: 200,
      data: {},
    });

    const result = await getCartService();

    expect(result).toEqual({});
    expect(apiStore.get).toHaveBeenCalled();
  });
});
