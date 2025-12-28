const apiStore = require('../../api/storeApi').default;

describe('ApiStore', () => {
  test('debe existir', () => {
    expect(apiStore).toBeDefined();
  });

  test('tiene métodos HTTP', () => {
    expect(typeof apiStore.get).toBe('function');
    expect(typeof apiStore.post).toBe('function');
  });
});
