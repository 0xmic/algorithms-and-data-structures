package main

// O(n^2) time | O(n) space
func IsPalindrome(str string) bool {
	reversed := ""
	for i := len(str) - 1; i >= 0; i-- {
		reversed += string(str[i])
	}
	for i := range str {
		if reversed[i] != str[i] {
			return false
		}
	}
	return true
}