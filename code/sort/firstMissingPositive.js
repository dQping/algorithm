// 缺失的第一个正数
// 题目地址：https://leetcode-cn.com/problems/first-missing-positive/

export default function firstMissingPositive(nums) {
  nums = nums.filter(item => item > 0);
  let len = nums.length;
  if (len) {
    nums.sort((a, b) => a - b);
    // 如果第一个数不为 1，返回 1
    if (nums[0] !== 1) return 1;
    // 如果相邻两个数相减大于 1，返回 nums[i]+1
    for (let i = 0; i < len - 1; i++) {
      if (nums[i + 1] - nums[i] > 1) {
        return nums[i] + 1;
      }
    }
    // 如果是一个是一个连续正整数
    return nums[len - 1] + 1;
  } else {
    return 1;
  }
}
