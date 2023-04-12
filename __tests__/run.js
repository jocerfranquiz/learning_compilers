const Eva = require('../Eva');
const Environment = require('../Environment');

const tests = [
  require('./self-eval-test.js'),
  require('./math-test.js'),
  require('./variables-test.js'),
  require('./block-test.js'),
];

const eva = new Eva(new Environment({
  null: null,

  true: true,
  false: false,

  VERSION: '0.1',
}));
tests.forEach(test => (
  typeof test === 'function')?
  test(eva) : console.log(`Test Error on test module ${test}`)
);

console.log('All assertions passed!');

