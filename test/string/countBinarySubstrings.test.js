import countBinarySubstrings from "../../code/string/countBinarySubstrings";

test("countBinarySubstrings: 00110", () => {
  expect(countBinarySubstrings("00110")).toBe(3);
});
test("countBinarySubstrings: 00110011", () => {
  expect(countBinarySubstrings("00110011")).toBe(6);
});
