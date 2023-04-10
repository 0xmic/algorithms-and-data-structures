// O(n) time | O(n) space
export function caesarCipherEncryptor(string: string, key: number) {
  const newLetters: string[] = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join("");
}

function getNewLetter(letter: string, key: number) {
  const newLetterCode = letter.charCodeAt(0) + key;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}
