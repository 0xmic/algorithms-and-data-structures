// O(n) time | O(n) space
export function maxSubsetSumNoAdjacent(array: number[]) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  const maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
  	maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  };
  return maxSums[maxSums.length - 1];
};
