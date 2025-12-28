const { getCategory } = require('../services/getCategory');
const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('getCategory', () => {
  test('obtiene categorías', async () => {
    apiStore.get = jest.fn().mockResolvedValue({ status: 200, data: [] });
    const result = await getCategory('1');
    expect(result).toEqual([]);
  });
});