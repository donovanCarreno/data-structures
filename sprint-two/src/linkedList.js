var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value, listObj) {
    // takes the value and adds to end of list
    var store = list.head;

    if (list.tail !== null) {
      store = list.tail;
    }

    list.tail = Node(value);
    
    if (list.head === null) {
      list.head = Node(value);
    } else if (list.head.next === null) {
      list.head.next = Node(value);
    }
  };

  list.removeHead = function() {
    //remove the first node from list and return the value of that node
    var store = list.head.value;
    
    list.head = list.head.next;

    return store;
  };

  list.contains = function(target) {
    //will find if target is in list and return boolean
    // return ||list.contains(target, list.head.next)
    // listObj = listObj || list.head;
    // console.log('val: ', listObj.value);
    // console.log('target: ', target);
    // console.log('list', list);
    // // 1. check if head value === target
    // if (listObj.value === target) {
    //   return true;
    // } else if (listObj.next !== null) {
    //   return list.contains(target, listObj.next);
    // }
    // // 2. if not, look to next

    return target === list.head.value || target === list.tail.value;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
