// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 题目地址： https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
export default function letterCombinations(digits) {
  let opt = ["", 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let numArr = digits.split("");
  let letters = [];
  numArr.forEach(num => {
    let tempVal = opt[Number(num)];
    if (tempVal && tempVal !== 1) {
      letters.push(tempVal);
    }
  });
  let match = codeArr => {
    let result = [];
    for (let i = 0; i < codeArr[0].length; i++) {
      for (let j = 0; j < codeArr[1].length; j++) {
        result.push(codeArr[0][i] + codeArr[1][j]);
      }
    }
    codeArr.splice(0, 2, result);

    if (codeArr.length > 1) {
      match(codeArr);
    } else {
      return result;
    }
    return codeArr[0];
  };

  if (letters.length > 1) {
    return match(letters);
  } else {
    return letters[0] ? letters[0].split("") : [];
  }
}
