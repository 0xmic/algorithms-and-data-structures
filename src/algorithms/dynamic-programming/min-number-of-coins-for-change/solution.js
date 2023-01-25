// O(nd) time | O(n) space
// n = target number
// d = # denominations
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
  	for (let amount = 0; amount < numOfCoins.length; amount++) {
  		if (denom <= amount) {
				numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
			};
		};
  };
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
};

exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;