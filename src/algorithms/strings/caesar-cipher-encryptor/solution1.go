package main

// O(n) time | O(n) space
func CaesarCipherEncryptor(str string, key int) string {
	shift, offset := rune(key%26), rune(26)
	runes := []rune(str)
	for i, char := range runes {
		if char >= 'a' && char+shift <= 'z' {
			char += shift
		} else {
			char += shift - offset
		}
		runes[i] = char
	}
	return string(runes)
}