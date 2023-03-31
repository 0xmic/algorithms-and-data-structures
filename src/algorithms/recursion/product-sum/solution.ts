type SpecialArray = Array<number | SpecialArray>;

// O(n) Time | O(d) Space
// n = # elements in the array
// d = greatest depth of "special" arrays in the array
export function productSum(array: SpecialArray, multipler = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multipler + 1);
    } else {
      sum += element;
    }
  }
  return sum * multipler;
}
