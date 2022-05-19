const min = require('./min');

test('最も小さい数字は1', () => {
    expect(min(100, 20, 5, 1, 200, 5)).toBe(1);
});
