/**
 * Environment: names storage.
 */
class Environment {
  /**
   * Creates an enviroment with a given record.
  */
  constructor(record = {}) {
    this.record = record;
  }

  /**
   * Creates a variable with the given name and value.
  */
  define(name, value) {
    this.record[name] = value;
    return value;
  }

  /**
   * Returns the value of a defined variable, or throws
   * ReferenceError if the variable is not defined.
  */
  lookup(name) {
    if (!this.record.hasOwnProperty(name)) {
      throw new ReferenceError(`Variable "${name}" is not defined.`);
    }
    return this.record[name];
  }

}

module.exports = Environment;

