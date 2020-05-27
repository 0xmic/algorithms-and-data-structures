// O(n^2) time | O(n) space
function isPalindrome(string) {
	let reversedString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[i];
	}
	return string === reversedString;
}

exports.isPalindrome = isPalindrome;