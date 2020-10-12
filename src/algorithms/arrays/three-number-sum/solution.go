package main

import "sort"

// O(n^2) time | O(n) space
func ThreeNumberSum(array []int, target int) [][]int {
	sort.Ints(array)
	triplets := [][]int{}
	for i := 0; i < len(array)-1; i++ {
		left, right := i+1, len(array)-1
		for left < right {
			currentSum := array[i] + array[left] + array[right]
			if currentSum == target {
				triplets = append(triplets, []int{array[i], array[left], array[right]})
				left += 1
				right -= 1
			} else if currentSum < target {
				left += 1
			} else if currentSum > target {
				right -= 1
			}
		}
	}
	return triplets
}