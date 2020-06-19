# O(nm) time | O(min(n, m)) space
def levenshteinDistance(str1, str2):
	small = str1 if len(str1) < len(str2) else str2
	big = str1 if len(str1) >= len(str2) else str2
	evenEdits = [x for x in range(len(small) + 1)]
	oddEdits = [None for x in range(len(small) + 1)]
	for i in range(1, len(big) + 1):
		if i % 2 == 1:
			currentEdits = oddEdits
			previousEdits = evenEdits
		else:
			currentEdits = evenEdits
			previousEdits = oddEdits
		currentEdits[0] = i
		for j in range(1, len(small) + 1):
			if big[i - 1] == small[j - 1]:
				currentEdits[j] = previousEdits[j - 1]
			else:
				currentEdits[j] = 1 + min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1])
	return evenEdits[-1] if len(big) % 2 == 0 else oddEdits[-1]