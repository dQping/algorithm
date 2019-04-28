// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

// 示例:
// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True

//注意:
// 数组内已种好的花不会违反种植规则。
// 输入的数组长度范围为 [1, 20000]。
// n 是非负整数，且不会超过输入数组的大小。

// 题目链接：https://leetcode-cn.com/problems/can-place-flowers/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
export default (flowerbed, n) => {
  let count = 0;
  let len = flowerbed.length;
  if (!n) return true;
  for (let i = 0; i < len; i++) {
    if (!flowerbed[i]) {
      var leftVoid = i === 0 || flowerbed[i - 1] === 0;
      var rightVoid = i === len - 1 || flowerbed[i + 1] === 0;
      if (leftVoid && rightVoid) {
        // 可以种植
        flowerbed[i] = 1;
        ++count;
        if (count === n) {
          return true;
        }
      }
    }
  }

  return false;
};
