var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var key = 0;
  var oldest = 0;

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var store = storage[oldest];
    delete storage[oldest];
    oldest++;
    return store;
  };

  someInstance.size = function() {
    return key - oldest < 0 ? 0 : key - oldest;
  };

  return someInstance;
};
