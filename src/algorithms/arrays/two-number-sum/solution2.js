// STRATEGY:
// Create hashmap to store values in array that have been read
// Cycle through array
// Read values in array and compute corresponding potentialMatch for targetSum
// If potentialMatch has been previously read, return match, else add value to hashmap
// COMPLEXITY:
// O(N) time | O(N) space

function twoNumberSum(array, targetSum) {
	const nums = {};
  
	for (const num of array) {
		const potentialMatch = targetSum - num;
    
		if (potentialMatch in nums) {
			return [num, potentialMatch];
		} else {
			nums[num] = true;
		}
	}
	
	return [];
}

exports.twoNumberSum = twoNumberSum;
