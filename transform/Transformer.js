/**
 * AST Transformer.
 */

class Transformer {

  /**
   * Translates -expression (function declaration)
   * into a variable declaration with a lambda
   * expression.
   */
  transformDefToVarLambda(defExp) {
    const [_tag, name, params, body] = defExp;
    return ['var', name, ['lambda', params, body]];
  }

  /**
   * Transforms  to nested -expressions.
   */
  transformSwitchToIf(switchExp) {
    // Implement here: see Lecture 14
  }

  /**
   * Transforms  to 
   */
  transformForToWhile(forExp) {
    // Implement here: see Lecture 14
  }

  /**
   * Transforms  to (set foo (+ foo 1))
   */
  transformIncToSet(incExp) {
    const [_tag, exp] = incExp;
    return ['set', exp, ['+', exp, 1]];
  }

  /**
   * Transforms  to (set foo (- foo 1))
   */
  transformDecToSet(incExp) {
    const [_tag, exp] = incExp;
    return ['set', exp, ['-', exp, 1]];
  }

  /**
   * Transforms  to (set foo (+ foo val))
   */
  transformIncValToSet(incExp) {
    const [_tag, exp, val] = incExp;
    return ['set', exp, ['+', exp, val]];
  }

  /**
   * Transforms  to (set foo (+ foo val))
   */
  transformDecValToSet(incExp) {
    const [_tag, exp, val] = incExp;
    return ['set', exp, ['-', exp, val]];
  }

}

module.exports = Transformer;
