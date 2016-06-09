var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.oldest = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Queue.prototype.dequeue = function() {
  if (this.key > this.oldest) {
    var store = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    return store;
  }
};

Queue.prototype.size = function() { 
  return this.key - this.oldest;
};

