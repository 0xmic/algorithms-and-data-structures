// O(n^2) time | O(n) space
export function isPalindrome(string: string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}
