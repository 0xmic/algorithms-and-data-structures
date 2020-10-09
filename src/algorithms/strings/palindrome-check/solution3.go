package main

// O(n) time | O(n) space
func IsPalindrome(str string) bool {
	return helper(str, 0)
}

func helper(str string, i int) bool {
	j := len(str) - 1 - i
	if i >= j {
		return true
	}
	if str[i] != str[j] {
		return false
	}
	return helper(str, i+1)
}