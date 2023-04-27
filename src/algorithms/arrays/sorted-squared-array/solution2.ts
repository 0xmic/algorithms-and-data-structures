// O(n) Time | O(n) Space
// n = length of input array
export function sortedSquaredArray(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0)
  let smallerValueIdx = 0
  let largerValueIdx = array.length - 1

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx]
    const largerValue = array[largerValueIdx]

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue
      smallerValueIdx++
    } else {
      sortedSquares[idx] = largerValue * largerValue
      largerValueIdx--
    }
  }

  return sortedSquares
}
