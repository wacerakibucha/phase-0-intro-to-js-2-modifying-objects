// index.test.js
const { destructivelyUpdateObject, nondestructivelyUpdateObject } = require('./index');

test('destructively updates an object', () => {
  const obj = { a: 1 };
  destructivelyUpdateObject(obj, 'a', 2);
  expect(obj.a).toBe(2);  // original object should change
});

test('nondestructively updates an object', () => {
  const obj = { a: 1 };
  const newObj = nondestructivelyUpdateObject(obj, 'a', 2);
  expect(obj.a).toBe(1);     // original object unchanged
  expect(newObj.a).toBe(2);  // new object has updated value
});
