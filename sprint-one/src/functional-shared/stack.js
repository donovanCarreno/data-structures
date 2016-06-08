var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.key = 0;
  
  _.extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {};

stackMethods.pop = function() {
  if (this.key > 0) {
    var store = this.storage[this.key - 1]; 
    delete this.storage[this.key];
    this.key--;   
  }
  return store;
};

stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

stackMethods.size = function() {
  return this.key;
};



