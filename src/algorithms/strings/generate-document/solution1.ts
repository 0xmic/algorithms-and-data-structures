// O(m * (n + m)) Time | O(1) Space
// n = number of characters
// m = length of the document
export function generateDocument(characters: string, document: string) {
  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document)
    const characterFrequency = countCharacterFrequency(character, characters)
    if (documentFrequency > characterFrequency) return false
  }

  return true
}

function countCharacterFrequency(character: string, target: string) {
  let frequency = 0
  for (const char of target) {
    if (char === character) frequency++
  }

  return frequency
}
