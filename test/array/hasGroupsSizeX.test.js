import hasGroupsSizeX from "../../code/array/hasGroupsSizeX";

test("hasGroupsSizeX: [1,2,3,4,4,3,2,1]", () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
  expect(hasGroupsSizeX([])).toBe(false);
  expect(hasGroupsSizeX([1, 1, 1, 1])).toBe(true);
});
