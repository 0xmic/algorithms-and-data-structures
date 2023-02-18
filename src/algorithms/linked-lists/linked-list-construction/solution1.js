class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  };
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };
  
  // O(1) time | O(1) space
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    };
    this.insertBefore(this.head, node);
  };
  
  // O(1) time | O(1) space
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    };
    this.insertAfter(this.tail, node);
  };
  
  // O(1) time | O(1) space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    };
    node.prev = nodeToInsert;
  };
  
  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    };
    node.next = nodeToInsert;
  };
  
  // O(p) time | O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    };
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    };
  };
  
  // O(n) time | O(1) space
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    };
  };
  
  // O(1) time | O(1) space
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  };
  
  // O(n) time | O(1) space
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  };
  
  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  };
};
  
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;