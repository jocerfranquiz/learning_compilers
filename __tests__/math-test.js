const assert = require('assert');

module.exports = eva => {
  assert.strictEqual(eva.eval(['+', 1, 5]), 6);
  assert.strictEqual(eva.eval(['+', ['+', 3, 2], 5]), 10);
  assert.strictEqual(eva.eval(['+', ['*', 3, 2], 5]), 11);
  assert.strictEqual(eva.eval(['**', 2, 8]), 256);
  assert.strictEqual(eva.eval(['%', 7, 5]), 2);
  assert.strictEqual(eva.eval(['/', 3, 2]), 1.5);
  assert.strictEqual(eva.eval(['-', 2, 3]), -1);
  try {
    assert.strictEqual(eva.eval(['/', 1, 0]), Infinity);
  } catch (err) {
    assert.strictEqual(err, 'Division by zero');
  }
};

