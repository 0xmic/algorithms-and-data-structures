# Remove Islands
You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only `0`s and `1`s. The matrix represents a two-toned image, where each `1` represents black and each `0` represents white. An island is defined as any number of `1`s that are horizontally or vertically adjacent (but not diagonally adjacent) and that don't touch the border of the image. In other words, a group of horizontally or vertically adjacent `1`s isn't an island if any of those `1`s are in the first row, last row, first column, or last column of the input matrix.  

Note than an island can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaed, for example.  

You can think of islands as patches of black that don't touch the border of the two-toned image.  

Write a function that returns a modified version of the input matrix, where all of the islands are removed. You remove an island by replacing it with `0`s.  

Naturally, you're allowed to mutate the input matrix.  

## Example
__Sample Input__:
```
matrix = 
[
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]
```
__Sample Output__:
```
[
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1]
]
// The islands that were removed an be clearly seen here:
// [
//   [  ,  ,  ,  ,  ,  ],
//   [  , 1,  ,  ,  ,  ],
//   [  ,  , 1,  ,  ,  ],
//   [  ,  ,  ,  ,  ,  ],
//   [  ,  , 1, 1,  ,  ],
//   [  ,  ,  ,  ,  ,  ]
// ]
```

## Strategy and Complexity
__Strategy__:
* Find and store the position of all the non-island 1s. You can do this by performing a graph traversal (depth-first search, for example) on all of the 1s that are on the border of the image. Afterwards, you can easily identify and remove all the island 1s from the input matrix by relying on the data structure that you used to store the positions of the non-island 1s.
* You can also solve this problem without the use of a data structure that stores the positions of non-island 1s. Simply loop through the border of the image, and performa  depth first search on all positions with the value 1. During this depth-first search, find all the 1s that are connected to the original position on the border, and change them from 1 to 2. After changing all non-island 1s to 2s, you can simply remove all the remaining 1s, which are guaranteed to be islands, from the matrix (by replacing them with 0s), and you can then change all the 2s back to 1s, since these were previously determined to be non-islands.  

__Complexity__: O(wh) Time | O(wh) Space
* w = width of input matrix
* h = height of input matrix
