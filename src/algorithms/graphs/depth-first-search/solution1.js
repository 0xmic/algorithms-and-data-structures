// STRATEGY:
// For every node, add that node's name to final array.
// For each child, call DFS and pass in child array.
// COMPLEXITY:
// Dependent on vertices (V) and edges (E)
// O(V + E) Time | O(V) Space

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}

exports.Node = Node;