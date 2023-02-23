class LinkedList  {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

// O(n) Time | O(1) Space
// n = number of nodes in the linked list
function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextDistinctNode = currentNode.next;
        while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
            nextDistinctNode = nextDistinctNode.next;
        };

        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    };

    return linkedList;
};

exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
