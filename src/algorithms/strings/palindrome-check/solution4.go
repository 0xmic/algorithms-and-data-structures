package main

// O(n) time | O(1) space
func IsPalindrome(str string) bool {
	for i := 0; i < len(str); i++ {
		j := len(str) - i - 1
		if str[i] != str[j] {
			return false
		}
	}
	return true
}