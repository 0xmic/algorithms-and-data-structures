# STRATEGY:
# For every node, add that node's name to final array.
# For each child, call DFS and pass in child array.
# COMPLEXITY:
# Dependent on vertices (V) and edges (E)
# O(V + E) Time | O(V) Space

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name
        
    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array