const assert = require('assert');

/**
* Eva interpreter.
*/
class Eva {
  eval(exp) {
    if (isNumber(exp)) {
      return exp;
    }
    throw 'Unimplemented';
  }
}

function isNumber(exp) {
  return typeof exp === 'number';
}

//--------------------------------------
// Test:

const eva = new Eva();

assert.strictEqual(eva.eval(1), 1);

console.log('All assertions passed!');

