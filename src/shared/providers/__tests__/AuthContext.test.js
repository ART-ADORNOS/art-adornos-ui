const React = require('react');
const { render } = require('@testing-library/react');
const { AuthProvider } = require('../AuthContext');

describe('AuthContext', () => {
  test('AuthProvider renderiza hijos', () => {
    const { container } = render(
      React.createElement(AuthProvider, null, React.createElement('div', null, 'Test'))
    );
    expect(container.textContent).toContain('Test');
  });
});