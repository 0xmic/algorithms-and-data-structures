// O(n) time | O(n) space
function isPalindrome(string) {
	const reversedChars = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reversedChars.push(string[i]);
	}
	return string === reversedChars.join('');
};

exports.isPalindrome = isPalindrome;