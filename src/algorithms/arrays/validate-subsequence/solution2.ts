// O(n) time | O(1) space
export function isValidSubsequence(array: number[], sequence: number[]) {
  let seqIdx = 0
  for (const value of array) {
    if (seqIdx === sequence.length) break
    if (sequence[seqIdx] === value) seqIdx++
  }
  return seqIdx === sequence.length
}
