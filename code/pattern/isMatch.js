// 题目地址： https://leetcode-cn.com/problems/regular-expression-matching/submissions/

// 我的解答：执行用时 : 140 ms，内存消耗 : 34.4 MB
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export default function isMatch(s, p) {
  const reg = new RegExp("^" + p + "$");
  return reg.test(s);
}
