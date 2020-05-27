// 快速排序
// 基础实现
function quickSort1(arr) {
  let len = arr.length;
  let left = [],
    right = [];
  if (len > 1) {
    let flag = arr[0];
    for (let i = 1; i < arr.length; i++) {
      let item = arr[i];
      item <= flag ? left.push(item) : right.push(item);
    }
    return quickSort(left).concat(flag, quickSort(right));
  } else {
    return arr;
  }
}

// 优化实现
export default function quickSort(arr) {
  // 交换两个元素
  let swap = (arr, leftIdx, rightIdx) => {
    let temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;
  };
  // 将元素分为两组，并返回标尺元素的位置
  let findCenter = (arr, leftIdx, rightIdx) => {
    let flag = arr[leftIdx],
      pos = leftIdx + 1;
    for (let i = pos; i <= rightIdx; i++) {
      if (flag > arr[i]) {
        swap(arr, pos, i);
        pos++;
      }
    }
    swap(arr, leftIdx, pos - 1);
    return pos - 1;
  };
  // 排序
  let mySort = (arr, leftIdx, rightIdx) => {
    if (rightIdx > leftIdx) {
      let center = findCenter(arr, leftIdx, rightIdx);
      mySort(arr, leftIdx, center);
      mySort(arr, center + 1, rightIdx);
    }
  };
  mySort(arr, 0, arr.length - 1);
  return arr;
}
