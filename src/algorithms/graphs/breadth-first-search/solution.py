class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    # O(v + e) time | O(v) space
    # v = # vertices
    # e = # edges
    def breadthFirstSearch(self, array):
        queue = [self]
        while len(queue) > 0:
        	current = queue.pop(0)
        	array.append(current.name)
        	for child in current.children:
        		queue.append(child)
        return array