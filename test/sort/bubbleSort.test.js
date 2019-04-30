import bubbleSort from "../../code/sort/bubbleSort";

test("bubbleSort: [4, 333, 36, 13888, 56, 2, 34, 56, 89]", () => {
  expect(bubbleSort([4, 333, 36, 13888, 56, 2, 34, 56, 89])).toEqual([
    2,
    4,
    34,
    36,
    56,
    56,
    89,
    333,
    13888
  ]);
});
