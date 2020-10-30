package main

// Upper Bound: O(n^2*n!) time | O(n*n!) space
// Roughly: O(n*n!) time | O(n*n!) space
func GetPermutations(array []int) [][]int {
	permutations := [][]int{}
	permutationsHelper(array, []int{}, &permutations)
	return permutations
}

func permutationsHelper(array []int, currentPermutation []int, permutations *[][]int) {
	if len(array) == 0 && len(currentPermutation) != 0 {
		*permutations = append(*permutations, currentPermutation)
		return
	}
	for i := range array {
		newArray := make([]int, i)
		copy(newArray, array[:i])
		newArray = append(newArray, array[i+1:]...)
		newPermutation := make([]int, len(currentPermutation))
		copy(newPermutation, currentPermutation)
		newPermutation = append(newPermutation, array[i])
		permutationsHelper(newArray, newPermutation, permutations)
	}
}