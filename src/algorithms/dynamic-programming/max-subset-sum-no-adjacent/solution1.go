package main

// O(n) time | O(n) space
func MaxSubsetSumNoAdjacent(array []int) int {
	if len(array) == 0 {
		return 0
	} else if len(array) == 1 {
		return array[0]
	}
	maxSums := make([]int, len(array))
	maxSums[0], maxSums[1] = array[0], max(array[0], array[1])
	for i := 2; i < len(array); i++ {
		maxSums[i] = max(maxSums[i-1], maxSums[i-2]+array[i])
	}
	return maxSums[len(array)-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}