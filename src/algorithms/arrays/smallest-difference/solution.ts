// O(nlog(n) + mlog(m)) time | O(1) space
// n = length of arrayOne
// m = length of arrayTwo
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let idxOne = 0;
	let idxTwo = 0;
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair: number[] = [];
	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		let firstNum = arrayOne[idxOne];
		let secondNum = arrayTwo[idxTwo];
		if (firstNum < secondNum) {
			current = secondNum - firstNum;
			idxOne++;
		} else if (secondNum < firstNum) {
			current = firstNum - secondNum;
			idxTwo++;
		} else {
			return [firstNum, secondNum];
		};
		if (smallest > current) {
			smallest = current;
			smallestPair = [firstNum, secondNum];
		};
	};
	return smallestPair;
};
