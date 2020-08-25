// O(n^3) time | O(1) space
function longestPalindromicSubstring(string) {
	let longest = '';
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			const substring = string.slice(i, j + 1);
			if (substring.length > longest.length && isPalindrome(substring)) {
				longest = substring;
			}
		}
	}
	return longest
}

function isPalindrome(string) {
	let leftIdx = 0;
	let rightIdx = string.length - 1;
	while (leftIdx < rightIdx) {
		if (string[leftIdx] !== string[rightIdx]) return false;
		leftIdx++;
		rightIdx--;
	}
	return true;
}

exports.longestPalindromicSubstring = longestPalindromicSubstring;