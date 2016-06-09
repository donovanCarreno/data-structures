var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.key = 0;
  newInstance.oldest = 0;
  newInstance.storage = {};

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
  if (this.key > this.oldest) {
    var store = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    return store;
  }
};

queueMethods.size = function() {
  return this.key - this.oldest;
};





