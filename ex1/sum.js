/**
 * 与えられた数列を合計する
 * @param  {...number} args 数列
 * @returns {number} 合計
 */
function sum(...args) {
    let n = 0;
    for (let i = 0; i < args.length; i++) {
        n += args[i];
    }
    return n;
}

module.exports = sum;