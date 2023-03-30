interface Cache {
  [key: number]: number;
}

// O(n) Time | O(n) Space
export function getNthFib(n: number, memoize: Cache = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}
