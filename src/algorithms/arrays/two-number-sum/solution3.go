package main

import "sort"

// O(nlog(n)) time | O(1) space
func TwoNumberSum(array []int, target int) []int {
	sort.Ints(array)
	left, right := 0, len(array)-1
	for left < right {
		currentSum := array[left] + array[right]
		if currentSum == target {
			return []int{array[left], array[right]}
		} else if currentSum < target {
			left += 1
		} else {
			right -= 1
		}
	}
	return []int{}
}