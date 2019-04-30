// 选择排序
// 算法原理：把每一个数都与第一个数比较，如果小于第一个数，就把它们交换位置；
// 这样一轮下来，最小的数就排到了最前面；重复 n-1 轮，就实现了选择排序
export default function selectionSort(arr) {
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
