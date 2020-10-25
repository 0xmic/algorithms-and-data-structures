package main

type Node struct {
	Name string
	Children []*Node
}

// O(v + e) time | O(v) space
func (n *Node) BreadthFirstSearch(array []string) []string {
	queue := []*Node{n}
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		array = append(array, current.Name)
		for _, child := range current.Children {
			queue = append(queue, child)
		}
	}
	return array
}