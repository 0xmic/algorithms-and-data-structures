// O(wh) Time | O(wh) Space
// w = width of input matrix
// h = height of input matrix
function removeIslands(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const rowIsBorder = row === 0 || row === matrix.length - 1;
            const colIsBorder = col === 0 || col === matrix[row].length - 1;
            const isBorder = rowIsBorder || colIsBorder;
            if (!isBorder) continue;

            if (matrix[row][col] != 1) continue;

            changeOnesConnectedToBorderToTwos(matrix, row, col);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const color = matrix[row][col];
            if (color === 1) {
                matrix[row][col] = 0;
            } else if (color === 2) {
                matrix[row][col] = 1;
            }
        }
    }

    return matrix;
}

function changeOnesConnectedToBorderToTwos(matrix, startRow, startCol) {
    const stack = [[startRow, startCol]];

    while (stack.length > 0) {
        const currentPosition = stack.pop();
        const [currentRow, currentCol] = currentPosition;

        matrix[currentRow][currentCol] = 2;

        const neighbors = getNeighbors(matrix, currentRow, currentCol);
        for (const neighbor of neighbors) {
            const [row, col] = neighbor;

            if (matrix[row][col] != 1) continue;

            stack.push(neighbor);
        }
    }
}

function getNeighbors(matrix, row, col) {
    const neighbors = [];

    const numRows = matrix.length;
    const numCols = matrix[row].length;

    if (row - 1 >= 0) neighbors.push([row - 1, col]); // UP
    if (row + 1 < numRows) neighbors.push([row + 1, col]); // DOWN
    if (col - 1 >= 0) neighbors.push([row, col - 1]); // LEFT
    if (col + 1 < numCols) neighbors.push([row, col + 1]); // RIGHT

    return neighbors;
}

exports.removeIslands = removeIslands;
