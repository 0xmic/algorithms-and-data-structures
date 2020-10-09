package main

// Best: O(n^2) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
func SelectionSort(array []int) []int {
	currentIndex := 0
	for currentIndex < len(array)-1 {
		smallestIndex := currentIndex
		for i := currentIndex + 1; i < len(array); i++ {
			if array[smallestIndex] > array[i] {
				smallestIndex = i
			}
		}
		array[currentIndex], array[smallestIndex] = array[smallestIndex], array[currentIndex]
		currentIndex += 1
	}
	return array
}