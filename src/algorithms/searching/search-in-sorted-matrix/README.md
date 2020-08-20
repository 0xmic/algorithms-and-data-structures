# Search In Sorted Matrix  
You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.  
Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise `[-1, -1]`.  

## Example  
__Sample Input__:  
```
matrix = [
	[1, 4, 7, 12, 15, 1000],
	[2, 5, 19, 31, 32, 1001],
	[3, 8, 24, 33, 35, 1002],
	[40, 41, 42, 44, 45, 1003],
	[99, 100, 103, 106, 128, 1004]
]
target = 44
```
__Sample Output__:  
```
[3, 3]
```

## Solution & Complexity  
__Strategy__:  
* Pick any number in the matrix and compare it to the target number. If this number is bigger than the target number, this tells you the target number can only be in the area above and to the left of the chosen number. Similarly, if this number is smaller than the target number, the target number can only be in the area to the right and below the chosen number.  
* You can start at the top right corner of the matrix, comparing the number there to the target number, and using whatever gathered from the first point to figure out what number to compare next if the top right number isn't equal to the target number. Continue until you find the target number of you get past the extremities of the matrix.  