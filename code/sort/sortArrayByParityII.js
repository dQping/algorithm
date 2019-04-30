// 奇偶排序：题目地址https://leetcode-cn.com/problems/sort-array-by-parity-ii/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 解答1:执行用时 : 184 ms；内存消耗 : 39.4 MB
var sortArrayByParityII1 = function(arr) {
    let odd = [];
    let even = [];
    arr.forEach(item => {
      if (item % 2) {
        odd.push(item);
      } else {
        even.push(item);
      }
    });
    arr.forEach((item, i) => {
      if (i % 2) {
        A[i] = odd.shift();
      } else {
        A[i] = even.shift();
      }
    });
    return A;
  };
  
  // 解答2:执行用时 : 168 ms；内存消耗 : 40.1 MB
  
  export default function sortArrayByParityII(arr) {
    let newArr = [];
    let odd = 1;
    let even = 0;
    arr.forEach(item => {
      if (item % 2) {
        newArr[odd] = item;
        odd += 2;
      } else {
        newArr[even] = item;
        even += 2;
      }
    });
    return newArr;
  }
  