// O(n) time | O(1) space
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
  	const current = Math.max(first, second + array[i]);
  	second = first;
  	first = current;
  }
  return first;
}

exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;