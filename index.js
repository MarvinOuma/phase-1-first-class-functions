// index.js

// receivesAFunction
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction
  function returnsANamedFunction() {
    function namedFunction() {
      return "This is a named function";
    }
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function() {
      return "This is an anonymous function";
    };
  }
  
  // Optional export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      receivesAFunction,
      returnsANamedFunction,
      returnsAnAnonymousFunction,
    };
  }