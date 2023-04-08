// O(n) time | O(n) space
export function isPalindrome(string: string, i = 0): boolean {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
