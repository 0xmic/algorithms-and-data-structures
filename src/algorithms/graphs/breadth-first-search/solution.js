class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  };

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  };

  // O(v + e) time | O(v) space
  // v = # vertices
  // e = # edges
  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      };
    };
    return array;
  };
};

exports.Node = Node;