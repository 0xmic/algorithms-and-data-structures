package main

// O(n*2^2) time | O(n*2^2) space
func Powerset(array []int) [][]int {
	subsets := [][]int{{}}
	for _, ele := range array {
		length := len(subsets)
		for i := 0; i < length; i++ {
			currentSubset := subsets[i]
			newsubset := append([]int{}, currentSubset...)
			newsubset = append(newsubset, ele)
			subsets = append(subsets, newsubset)
		}
	}
	return subsets
}