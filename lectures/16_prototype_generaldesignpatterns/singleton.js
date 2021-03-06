'use strict';

const GLOBAL_KEY = Symbol('Some_Namespace');

const globalSymbols = Object.getOwnPropertySymbols(global);
const hasSymbol = globalSymbols.indexOf(GLOBAL_KEY) > -1;

// Never reimplement the singleton object if already exists
if (!hasSymbol) {
  global[GLOBAL_KEY] = {
    someSampleObjectKey: 'someSampleObjectValue'
  };
}

// Define the singleton API
const singleton = {};

// Return single global instance of object for singleton
Object.defineProperty(singleton, 'instance', {
  get: () => {
    return global[GLOBAL_KEY];
  }
});

// Prevent changes to the singleton API
Object.freeze(singleton);

// Export the singleton
module.exports = singleton;

// Usage
const test = singleton.instance;
console.log(test.someSampleObjectKey);
