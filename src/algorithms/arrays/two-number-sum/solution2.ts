// O(n) Time | O(n) Space
export function twoNumberSum(array: number[], targetSum: number) {
    const nums: {[key: number]: boolean} = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}
