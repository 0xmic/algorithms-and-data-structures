class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

// O(n) time | O(1) space
function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <= k) {
  	second = second.next;
  	counter++;
  };
  if (second === null) {
  	head.value = head.next.value;
  	head.next = head.next.next;
  	return;
  };
  while (second.next !== null) {
  	second = second.next;
  	first = first.next;
  };
  first.next = first.next.next;
};

exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;