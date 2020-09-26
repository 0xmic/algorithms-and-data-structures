package main

type Node struct {
	Name string
	Children []*Node
}

// O(v + e) time | O(v) space
func (n *Node) DepthFirstSearch(array []string) []string {
	array = append(array, n.Name)
	for _, child := range n.Children {
		array = child.DepthFirstSearch(array)
	}
	return array
}