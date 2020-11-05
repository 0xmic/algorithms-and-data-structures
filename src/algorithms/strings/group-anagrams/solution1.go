package main

import (
	"sort"
)

// O(w * n * log(n) + n * w * log(w)) itme | O(wn) space
// w = number of words, n = length of the longest word
func GroupAnagrams(words []string) [][]string {
	if len(words) == 0 {
		return [][]string{}
	}

	sortedWords := []string{}
	indices := []int{}
	for i, word := range words {
		sortedWords = append(sortedWords, sortWord(word))
		indices = append(indices, i)
	}
	sort.Slice(indices, func(i, j int) bool {
		return sortedWords[indices[i]] < sortedWords[indices[j]]
	})

	result := [][]string{}
	currentAnagramGroup := []string{}
	currentAnagram := sortedWords[indices[0]]
	for _, index := range indices {
		word := words[index]
		sortedWord := sortedWords[index]
		if len(currentAnagramGroup) == 0 {
			currentAnagramGroup = append(currentAnagramGroup, word)
			currentAnagram = sortedWord
			continue
		}

		if sortedWord == currentAnagram {
			currentAnagramGroup = append(currentAnagramGroup, word)
			continue
		}

		result = append(result, currentAnagramGroup)
		currentAnagramGroup = []string{word}
		currentAnagram = sortedWord
	}

	result = append(result, currentAnagramGroup)

	return result
}

func sortWord(word string) string {
	wordBytes := []byte(word)
	sort.Slice(wordBytes, func(i, j int) bool {
		return wordBytes[i] < wordBytes[j]
	})
	return string(wordBytes)
}
