const getProductDetailService =require('../services/getProductDetailService').default;
const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');


describe('getProductDetailService', () => {
  test('obtiene detalle de producto', async () => {
    apiStore.get = jest.fn().mockResolvedValue({ status: 200, data: { id: 1 } });
    const result = await getProductDetailService('1');
    expect(result).toEqual({ id: 1 });
  });
});