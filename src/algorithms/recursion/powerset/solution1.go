package main

// O(n*2^n) time | O(n*2^n) space
func Powerset(array []int) [][]int {
	return powerset(array, len(array)-1)
}

func powerset(array []int, index int) [][]int {
	if index < 0 {
		return [][]int{{}}
	}
	subsets := powerset(array, index-1)
	ele := array[index]
	length := len(subsets)
	for i := 0; i < length; i++ {
		currentSubset := subsets[i]
		newsubset := append([]int{}, currentSubset...)
		newsubset = append(newsubset, ele)
		subsets = append(subsets, newsubset)
	}
	return subsets
}