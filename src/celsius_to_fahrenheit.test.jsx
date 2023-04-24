import celsius_to_fahrenheit from "./celsius_to_fahrenheit";

test('convert 0 celsius to f ', () => {
  expect(celsius_to_fahrenheit(0)).toBe(32);
});

test('convert 32 celsius to f ', () => {
  expect(celsius_to_fahrenheit(32)).toBe(89.6);
});

test('convert 100 celsius to f ', () => {
  expect(celsius_to_fahrenheit(100)).toBe(212);
});

test('convert -10 celsius to f ', () => {
  expect(celsius_to_fahrenheit(-10)).toBe(14);
});