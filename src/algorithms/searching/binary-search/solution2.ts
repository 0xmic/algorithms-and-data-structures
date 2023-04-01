// O(log(n)) Time | Olog(n) Space
export function binarySearch(array: number[], target: number) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(
  array: number[],
  target: number,
  left: number,
  right: number
): number {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
