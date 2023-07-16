export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  };
};

// O(n) time | O(1) space
export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let counter = 1;
  let first: LinkedList = head;
  let second: LinkedList | null = head;
  while (counter <= k) {
  	second = second!.next;
  	counter++;
  };
  if (second === null) {
  	head.value = head.next!.value;
  	head.next = head.next!.next;
  	return;
  };
  while (second.next !== null) {
  	second = second.next;
  	first = first.next!;
  };
  first.next = first.next!.next;
};
