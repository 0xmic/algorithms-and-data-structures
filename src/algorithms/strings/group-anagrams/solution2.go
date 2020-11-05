package main

import "sort"

// O(w * n * log(n)) time | O(wn) space 
// w = number of words, n = length of the longest word
func GroupAnagrams(words []string) [][]string {
	anagrams := map[string][]string{}

	for _, word := range words {
		sortedWord := sortWord(word)
		anagrams[sortedWord] = append(anagrams[sortedWord], word)
	}

	result := [][]string{}
	for _, group := range anagrams {
		result = append(result, group)
	}
	return result
}

func sortWord(word string) string {
	wordBytes := []byte(word)
	sort.Slice(wordBytes, func(i, j int) bool {
		return wordBytes[i] < wordBytes[j]
	})
	return string(wordBytes)
}