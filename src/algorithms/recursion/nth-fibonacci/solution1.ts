// O(2*n) Time | O(n) Space
export function getNthFib(n: number): number {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
