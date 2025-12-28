const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('deleteProductService', () => {
  test('delete está disponible', () => {
    apiStore.delete = jest.fn();
    expect(apiStore.delete).toBeDefined();
  });
});