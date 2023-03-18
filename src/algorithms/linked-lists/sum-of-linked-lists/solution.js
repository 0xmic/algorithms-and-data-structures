class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(max(n, m)) Time | O(max(n, m)) Space
// n = length of first Linked List
// m = length of second Linked List
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // This variable will store a dummy node whose .next
    // attribute will point to the head of our new LL.
    const newLinkedListHeadPointer = new LinkedList(0);
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;
    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        const valueOne = nodeOne != null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
        const sumOfValues = valueOne + valueTwo + carry;

        const newValue = sumOfValues % 10;
        const newNode = new LinkedList(newValue);
        currentNode.next = newNode;
        currentNode = newNode;

        carry = Math.floor(sumOfValues / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }

    return newLinkedListHeadPointer.next;
}

exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
