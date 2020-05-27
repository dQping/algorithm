import quickSort from "../../code/sort/quickSort";

test("quickSort: [4, 333, 36, 13888, 56, 2, 34, 56, 89]", () => {
  expect(quickSort([4, 333, 36, 13888, 56, 2, 34, 56, 89])).toEqual([
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
