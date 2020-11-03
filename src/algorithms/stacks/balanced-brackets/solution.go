package main

var opening = map[rune]bool {
	'(': true,
	'[': true,
	'{': true,
}

var closing = map[rune]bool {
	')': true,
	']': true,
	'}': true,
}

var matching = map[rune]rune {
	')': '(',
	']': '[',
	'}': '{',
}

// O(n) time | O(n) space
func BalancedBrackets(s string) bool {
	stack := []rune{}
	for _, char := range s {
		if _, found := opening[char]; found {
			stack = append(stack, char)
			continue
		}
		if _, found := closing[char]; found {
			if len(stack) == 0 {
				return false
			}
			if stack[len(stack)-1] == matching[char] {
				stack = stack[0 : len(stack)-1]
			} else {
				return false
			}
		}
	}
	return len(stack) == 0
}