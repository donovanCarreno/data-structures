var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var keys = 0;
  someInstance.push = function(value) {
    storage[keys] = value;
    keys++;
  };

  someInstance.pop = function() {
    if(keys > 0){
      var store = storage[keys - 1];
      delete storage[keys];
      keys--;
    }
    return store;
  };

  someInstance.size = function() {
      return keys;
  };

  return someInstance;
};

// var myStack = stack();
// myStack.push(5);
// myStack.push('oranges');
// myStack.size() //2
// myStack.pop() // 'oranges'
// myStack.size() // 1
