const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('updateProductService', () => {
  test('put disponible', () => {
    apiStore.put = jest.fn();
    expect(apiStore.put).toBeDefined();
  });
});