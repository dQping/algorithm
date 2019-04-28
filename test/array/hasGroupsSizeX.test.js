import hasGroupsSizeX from "../../code/array/hasGroupsSizeX";

test("hasGroupsSizeX: [1,2,3,4,4,3,2,1]", () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});
test("hasGroupsSizeX: [1,1,1,2,2,2,3,3]", () => {
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});
test("hasGroupsSizeX: []", () => {
  expect(hasGroupsSizeX([])).toBe(false);
});
test("hasGroupsSizeX: [1,1,1,1]", () => {
  expect(hasGroupsSizeX([1, 1, 1, 1])).toBe(true);
});
