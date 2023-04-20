export class LinkedList {
  value: Number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

// O(n) Time | O(1) Space
// n = number of nodes in the linked list
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currentNode: LinkedList | null = linkedList
  while (currentNode !== null) {
    let nextDistinctNode: LinkedList | null = currentNode.next
    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === currentNode.value
    ) {
      nextDistinctNode = nextDistinctNode.next
    }

    currentNode.next = nextDistinctNode
    currentNode = nextDistinctNode
  }

  return linkedList
}
