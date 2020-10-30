package main

type LinkedList struct {
	Value int
	Next *LinkedList
}

// O(n) time | O(1) space
func RemoveKthNodeFromEnd(head *LinkedList, k int) {
	counter, first, second := 1, head, head
	for counter <= k {
		second = second.Next
		counter += 1
	}
	if second == nil {
		head.Value = head.Next.Value
		head.Next = head.Next.Next
		return
	}
	for second.Next != nil {
		second = second.Next
		first = first.Next
	}
	first.Next = first.Next.Next
}