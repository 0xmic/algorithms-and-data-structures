// Sort array
// Create two pointers at first and last values in array
// While the pointers haven't crossed, evaluate if pointer sums equals targetSum
// If sum is low, move left pointer right, else move right pointer left
// O(nlog(n)) time | O(1) space

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const currentSum = array[left] + array[right]

        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }

    return [];
}

exports.twoNumberSum = twoNumberSum;
