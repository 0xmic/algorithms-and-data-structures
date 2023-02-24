// O(nlog(n)) Time | O(n) Space
// n = length of input array
function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);

    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx];
        sortedSquares[idx] = value * value;
    }

    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
}

exports.sortedSquaredArray = sortedSquaredArray;
