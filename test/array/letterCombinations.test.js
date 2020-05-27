import letterCombinations from "../../code/array/letterCombinations";

test("letterCombinations:234", () => {
  expect(letterCombinations("234")).toEqual([
    "adg",
    "adh",
    "adi",
    "aeg",
    "aeh",
    "aei",
    "afg",
    "afh",
    "afi",
    "bdg",
    "bdh",
    "bdi",
    "beg",
    "beh",
    "bei",
    "bfg",
    "bfh",
    "bfi",
    "cdg",
    "cdh",
    "cdi",
    "ceg",
    "ceh",
    "cei",
    "cfg",
    "cfh",
    "cfi"
  ]);
  expect(letterCombinations("")).toEqual([]);
  expect(letterCombinations("3")).toEqual(["d", "e", "f"]);
});
