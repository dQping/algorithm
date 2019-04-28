// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量
// 并且这些子字符串中的所有0和所有1都是组合在一起的。
// 重复出现的子串要计算它们出现的次数。

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
// 请注意，一些重复出现的子串要计算它们出现的次数。
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

/**
 * @param {string} s
 * @return {number}
 */
export default function countBinarySubstrings(s) {
  let count = 0;
  // 判断子串是否符合要求
  let arr = [];
  let match = str => {
    let j = str.match(/^(0+|1+)/)[0];
    let len = j.length;
    let o = (j[0] ^ 1).toString().repeat(len);
    let reg = new RegExp(`^${j}${o}`);
    if (reg.test(str)) {
      count++;
      arr.push(RegExp.$1);
    }
  };

  for (let i = 0; i < s.length - 1; i++) {
    match(s.slice(i));
  }
  return count;
}
