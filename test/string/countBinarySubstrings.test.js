import countBinarySubstrings from "../../code/string/countBinarySubstrings";

test("countBinarySubstrings: 00110", () => {
  expect(countBinarySubstrings("00110")).toBe(3);
  expect(countBinarySubstrings("00110011")).toBe(6);
});
