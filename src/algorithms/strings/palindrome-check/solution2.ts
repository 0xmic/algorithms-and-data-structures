// O(n) time | O(n) space
export function isPalindrome(string: string) {
  const reversedChars: string[] = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join("");
}
