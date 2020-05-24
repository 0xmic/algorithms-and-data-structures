# Selection Sort
Write a function that takes in an array of integeres and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.  

## Example  
__Sample Input__:  
```
array = [8, 5, 2, 9, 5, 6, 3]
```
__Sample Output__:  
```
[2, 3, 5, 5, 6, 8, 9]
```

## Solution & Complexity  
__Strategy__: Divide list into 2; one side represents unsorted numbers, the other sorted. Start with unsorted list the size of the array and an empty sorted list. Iterate through unsorted list and find the smallest number - append the smallest number to the sorted list. Repeat until the unsorted list only has 1 entry left - the largest number.  
__Complexity__: O(N<sup>2</sup>) time | O(1) space
