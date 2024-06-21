import getValue from ".";

test("returns expected value", () => {
  expect(getValue()).toBe(25);
});
