package main

// O(n) time | O(n) space
func IsPalindrome(str string) bool {
	result := []byte{}
	for i := len(str) - 1; i >= 0; i-- {
		result = append(result, str[i])
	}
	return str == string(result)
}