package main

// O(n + m) time | O(1) space
func SearchInSortedMatrix(matrix [][]int, target int) []int {
	row, col := 0, len(matrix[0])-1
	for row < len(matrix) && col >= 0 {
		if matrix[row][col] > target {
			col -= 1
		} else if matrix[row][col] < target {
			row += 1
		} else {
			return []int{row, col}
		}
	}
	return []int{-1, -1}
}