const { one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = require('./calc');

test('7 * 5 = 35', () => {
  expect(seven(times(five()))).toBe(35);
});

test('4 + 9 = 13', () => {
  expect(four(plus(nine()))).toBe(13);
});

test('8 - 3 = 5', () => {
  expect(eight(minus(three()))).toBe(5);
});

test('6 / 2 = 3', () => {
  expect(six(dividedBy(two()))).toBe(3);
});

test('8 / 3 = 2 (not 2.6666...)', () => {
  expect(eight(dividedBy(three()))).toBe(2);
});