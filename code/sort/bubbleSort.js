// 冒泡算法 基本实现

// export default function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = len - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// 冒泡算法 改进版
// 设置一个标志性变量 pos，用于记录每趟排序中最后一次进行交换的位置
// 由于 pos 位置之后的记录均已交换到位，故在进行下一趟排序是只要扫描到 pos 位置即可

export default function bubbleSort(arr) {
  let i = arr.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i = pos;
  }

  return arr;
}
