// STRATEGY:
// Nested for-loops
// COMPLEXITY:
// O(N^2) time | O(1) space

function twoNumberSum(array, targetSum) {
    
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
	return [];
}

exports.twoNumberSum = twoNumberSum;
