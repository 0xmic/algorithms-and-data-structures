package main

// O(log(n)) time | O(log(n)) space
func BinarySearch(array []int, target int) int {
	return helper(array, target, 0, len(array)-1)
}

func helper(array []int, target, left, right int) int {
	if left > right {
		return -1
	}
	middle := (left + right) / 2
	potentialMatch := array[middle]
	if target == potentialMatch {
		return middle
	} else if target < potentialMatch {
		return helper(array, target, left, middle-1)
	}
	return helper(array, target, middle+1, right)
}