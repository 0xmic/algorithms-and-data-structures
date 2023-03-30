// O(n) Time | O(1) Space
export function getNthFib(n: number) {
  let lastTwo: [number, number] = [0, 1];
  let counter = 3;
  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
