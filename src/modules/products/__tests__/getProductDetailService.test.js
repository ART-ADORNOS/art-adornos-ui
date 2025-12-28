const getProductDetailServiceTest = require('../services/getProductDetailService').default;
const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('getProductDetailService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('obtiene detalle de producto exitosamente', async () => {
    const mockProduct = { id: 1, name: 'Producto Test', price: 100 };
    apiStore.get = jest.fn().mockResolvedValue({
      status: 200,
      data: mockProduct
    });

    const result = await getProductDetailServiceTest('1');

    expect(apiStore.get).toHaveBeenCalled();
    expect(result).toEqual(mockProduct);
    expect(result.id).toBe(1);
  });

  test('maneja error cuando falla la petición', async () => {
    apiStore.get = jest.fn().mockRejectedValue(new Error('Network error'));

    await expect(getProductDetailServiceTest('999')).rejects.toThrow();
  });

  test('llama con el ID correcto', async () => {
    apiStore.get = jest.fn().mockResolvedValue({
      status: 200,
      data: { id: 5 }
    });

    await getProductDetailServiceTest('5');

    expect(apiStore.get).toHaveBeenCalledWith(expect.stringContaining('5'));
  });

  test('retorna data cuando status es 200', async () => {
    const data = { id: 10, title: 'Test' };
    apiStore.get = jest.fn().mockResolvedValue({ status: 200, data });

    const result = await getProductDetailServiceTest('10');

    expect(result).toEqual(data);
  });

  test('maneja respuesta sin status 200', async () => {
    apiStore.get = jest.fn().mockResolvedValue({ status: 404 });

    const result = await getProductDetailServiceTest('999');

    expect(result).toBeUndefined();
  });
});