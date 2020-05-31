// O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
		while (i < j && array[j] === toMove) j--;
		if (array[i] === toMove) swap(i, j, array);
		i++;
	}
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

exports.moveElementToEnd = moveElementToEnd;