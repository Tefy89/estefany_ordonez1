const { suma, resta } = require('../index');

test('Suma correcta', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Resta correcta', () => {
  expect(resta(5, 3)).toBe(2);
});