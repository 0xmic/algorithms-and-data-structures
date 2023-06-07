type Triplet = [number, number, number]

// O(n^2) time | O(n) space
export function threeNumberSum(array: number[], targetSum: number) {
	array.sort((a, b) => a - b);
	const triplets: Triplet[] = [];
	for (let i = 0; i < array.length -2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			const currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum) {
				triplets.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum) {
				left++;
			} else if (currentSum > targetSum) {
				right--;
			};
		};
	};
	return triplets;
};
