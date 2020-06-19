# Levenshtein Distance  
Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.  
There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.  

## Example  
__Sample Input__  
```
str1 = "abc"  
str2 = "yabd"  
```
__Sample Output__  
```
2 // insert "y"; substitute "c" for "d"
```

## Solution & Complexity  
### Solution 1  
__Strategy__:  
* Build a two-dimensional array of the minimum numbers of edits for pairs of substrings of the input strings. Let the rows of the array represent substrings of the second input string str2. Let the first row represent the empty string. Let each row i thereafter represent the substrings of str2 from 0 to i, with i excluded. Let the columns similarly represent the first input string str1.
* Build up the array one row at a time. In other words, find the minimum number of edits between all the substrings of str1 represented by the columns and the empty string represented by the first row, then between all the substrings of str1 represented by the columns and the first letter of str2 represented by the second row, etc., until you compare both full strings. Find a formula that relates the minimum number of edits at any given point to the previous numbers.  
* At any position (i, j) in the two-dimensional array, if str2[i] is equal to str1[j], then the edit distance at position (i, j) is equal to the one at position (i - 1, j - 1), since adding str2[i] and str1[j] to the substrings represented at position (i - 1, j - 1) does not require any additional edit operation. If str2[i] is not equal to str1[j] however, then the edit distance at position (i, j) is equal to 1 + the minimum of the edit distances at positions (i - 1, j - 1).
__Complexity__: O(NM) Time | O(NM) Space  
* N = length of string 1  
* m = length of string 2  

### Solution 2  
__Strategy__:  
* It is not necessary to store the entire two-dimensional array mentioned in strategy 1. It is more optimal to identify what stored values are actually used throughout the process of building the array and store only what is needed and nothing more.  
__Complexity__: O(NM) Time | O(min(N, M)) Space  
* N = length of string 1  
* m = length of string 2  