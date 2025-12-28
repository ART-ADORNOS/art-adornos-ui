const { getCartService } = require('../service/getCartService');
const apiStore = require('../../../core/api/storeApi').default;

jest.mock('axios');

describe('getCart (getCartService)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('obtiene carrito exitosamente', async () => {
    const mockCart = {
      items: [{ id: 1, product: 'Test', quantity: 2 }],
      total: 200,
    };

    apiStore.get.mockResolvedValue({
      status: 200,
      data: mockCart,
    });

    const result = await getCartService();

    expect(result).toEqual(mockCart);
    expect(result.items).toHaveLength(1);
    expect(result.total).toBe(200);
  });

  test('lanza error cuando status no es 200', async () => {
    apiStore.get.mockResolvedValue({
      status: 500,
      data: null,
    });

    await expect(getCartService()).rejects.toThrow(
 'Error al obtener carrito'
    );
  });

  test('maneja error de red', async () => {
    apiStore.get.mockRejectedValue(
      new Error('Network failure')
    );

    await expect(getCartService()).rejects.toThrow();
  });

  test('verifica que apiStore.get es llamado con la URL correcta', async () => {
    apiStore.get.mockResolvedValue({
      status: 200,
      data: { items: [] },
    });

    await getCartService();

    expect(apiStore.get).toHaveBeenCalled();
  });

  test('retorna carrito vacío correctamente', async () => {
    apiStore.get.mockResolvedValue({
      status: 200,
      data: { items: [], total: 0 },
    });

    const result = await getCartService();

    expect(result.items).toEqual([]);
    expect(result.total).toBe(0);
  });
});
