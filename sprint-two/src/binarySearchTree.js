var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left;
  newTree.right;

  _.extend(newTree, binaryMethods);

  return newTree;
};

var binaryMethods = {};

binaryMethods.insert = function(value, node) {
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (this.right && target > this.value) {
    return this.right.contains(target);
  } else if (this.left && target < this.value) {
    return this.left.contains(target);
  } else {
    return false;
  }
};

binaryMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
