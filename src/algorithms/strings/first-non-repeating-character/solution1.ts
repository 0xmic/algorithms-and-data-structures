// O(n^2) Time | O(1) Space
// n = length of the input string
export function firstNonRepeatingCharacter(string: string) {
  for (let idx = 0; idx < string.length; idx++) {
    let foundDuplicate = false
    for (let idx2 = 0; idx2 < string.length; idx2++) {
      if (string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true
    }

    if (!foundDuplicate) return idx
  }

  return -1
}
