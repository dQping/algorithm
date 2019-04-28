// 题目链接： https://leetcode-cn.com/problems/repeated-substring-pattern/

// 我的解答：执行用时 : 160 ms, 内存消耗 : 39.4 MB
/**
 * @param {string} s
 * @return {boolean}
 */
export default function repeatedSubstringPattern(s) {
  let len = s.length;
  if (len < 2) return false;
  for (let i = 1; i <= len; i++) {
    if (len % i === 0 && i !== len) {
      let temp = s.slice(0, i);
      let reg = new RegExp(temp, "g");
      if (s.match(reg).length === len / i) {
        console.log(i);
        return true;
      }
    }
  }
  return false;
}

// 别人的解答1:执行用时 : 144 ms, 内存消耗 : 36.1 MB
var repeatedSubstringPattern1 = function(s) {
  var reg = /^(\w+)\1+$/;
  return reg.test(s);
};

// 别人的解答2:执行用时 : 100 ms, 内存消耗 : 36.5 MB，优秀！
var repeatedSubstringPattern2 = function(s) {
  const str = s + s;
  return str.slice(1, str.length - 1).includes(s);
};
