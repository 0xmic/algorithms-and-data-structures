// Upper Bound: O(n^2*n!) time | O(n*n!) space
// Roughly: O(n*n!) time | O(n*n!) space
export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper(array, [], permutations);
  return permutations;
};

function permutationsHelper(
  array: number[],
  currentPermutation: number[],
  permutations: number[][]
) {
	if (!array.length && currentPermutation.length) {
		permutations.push(currentPermutation);
	} else {
		for (let i = 0; i < array.length; i++) {
			const newArray = array.slice(0, i).concat(array.slice(i + 1));
			const newPermutation = currentPermutation.concat([array[i]]);
			permutationsHelper(newArray, newPermutation, permutations)
		};
	};
};
