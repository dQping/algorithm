// 格雷编码
// 题目地址：https://leetcode-cn.com/problems/gray-code/submissions/

/**
 * @param {number} n
 * @return {number[]}
 */
// 我的解答
export default function grayCode(n) {
  if (!n) return [0];
  let make = n => {
    if (n == 1) {
      return ["0", "1"];
    } else {
      let prev = make(n - 1);
      let result = [];
      let max = Math.pow(2, n) - 1;
      for (let i = 0; i < prev.length; i++) {
        result[i] = `0${prev[i]}`;
        result[max - i] = `1${prev[i]}`;
      }
      return result;
    }
  };
  let arr = make(n);
  return arr.map(item => {
    return parseInt(item, 2);
  });
}

// 别人的解答，优秀！暂时还不太能理解
// var grayCode = function (n) {
//   let result = [];
//   let stop = (1 << n);
//   for (let i = 0; i < stop; i++) {
//     result.push(i ^ (i >> 1));
//   }
//   return result;
// };
