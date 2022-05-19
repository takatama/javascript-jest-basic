const sum = require('./sum');

test('1から10を合計したら55', () => {
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
});
