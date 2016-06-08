var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(Stack.prototype);

  newInstance.key = 0;
  newInstance.storage = {};

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  if(this.key > 0){
    var store = this.storage[this.key - 1];
    delete this.storage[this.key - 1];
    this.key--;
    return store;
  }
};

stackMethods.size = function() {
  return this.key;
};

Stack.prototype.push = stackMethods.push;

Stack.prototype.pop = stackMethods.pop;

Stack.prototype.size = stackMethods.size;