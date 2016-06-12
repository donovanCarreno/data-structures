

var HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;
  if (this._size > (0.75 * this._limit)) {
    this._limit *= 2;
    this.reOrg();
    //console.log(this._storage.showStorage);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].splice(i, 1);
      this._size--;
    }
  }
  if (this._size < (0.25 * this._limit)) {
   // debugger;
    this._limit = (this._limit / 2);
    this.reOrg();
  }
};

HashTable.prototype.reOrg = function() {
  var nArray = [];
  this._storage.each(function(bucket) {
  //  debugger;
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        nArray.push(bucket[i]);
      }
    }
  });

    console.log(this._limit);
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  
  for (var i = 0; i < nArray.length; i++) {
  //  debugger;
    this.insert(nArray[i][0], nArray[i][1]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


