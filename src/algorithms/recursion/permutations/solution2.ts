// O(n*n!) time | O(n*n!) space
export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper(0, array, permutations);
  return permutations;
};

function permutationsHelper(
  i: number,
  array: number[],
  permutations: number[][]
) {
	if (i === array.length - 1) {
		permutations.push(array.slice());
	} else {
		for (let j = i; j < array.length; j++) {
			swap(i, j, array);
			permutationsHelper(i + 1, array, permutations);
			swap(i, j, array);
		};
	};
};

function swap(
  i: number,
  j: number,
  array: number[]
) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};
