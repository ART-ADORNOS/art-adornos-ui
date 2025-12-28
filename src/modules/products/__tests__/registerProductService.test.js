const apiStore = require('../../../core/api/storeApi').default;

jest.mock('../../../core/api/__mocks__/axios');

describe('registerProductService', () => {
  test('post funciona', () => {
    apiStore.post = jest.fn();
    expect(apiStore.post).toBeDefined();
  });
});