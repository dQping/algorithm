import selectionSort from "../../code/sort/selectionSort";

test("selectionSort: [4, 333, 36, 13888, 56, 2, 34, 56, 89]", () => {
  expect(selectionSort([4, 333, 36, 13888, 56, 2, 34, 56, 89])).toEqual([
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
