/**
 * https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39 に掲載された問題と同じです。
 * 0（zero）から9（nine）を使った四則演算をするための関数群です。
 * 例えば、seven(times(five())) は 7 * 5 を表し、5 を返します。
 * ただし、割り算は整数の割り算で小数点以下は切り捨てます。
 * 例えば、eight(dividedBy(three())) は 2 になります（2.666...ではありません）。
 */
function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() { }

module.exports = {
  one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy
}