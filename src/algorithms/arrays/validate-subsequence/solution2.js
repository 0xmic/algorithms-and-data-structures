// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
	for (const value of array) {
		if (seqIdx === sequence.length) break;
		if (sequence[seqIdx] === value) seqIdx++;
	}
	return seqIdx === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;