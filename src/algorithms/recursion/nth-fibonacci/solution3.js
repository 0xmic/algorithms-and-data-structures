// STRATEGY:
// Iterative solution. Store last two fib numbers in an array.
// COMPLEXITY:
// O(n) Time | O(1) Space

function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
  	const nextFib = lastTwo[0] + lastTwo[1];
  	lastTwo[0] = lastTwo[1];
  	lastTwo[1] = nextFib;
  	counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

exports.getNthFib = getNthFib;