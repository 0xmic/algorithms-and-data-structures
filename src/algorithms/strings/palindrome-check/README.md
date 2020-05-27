# Palindrome Check  
Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.  
A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.  

## Example  
__Sample Input__:  
```
string = "abcdcba"
```
__Sample Output__:
```
true // it's written the same forward and backward
```

## Solution & Complexity  
### Solution 1  
__Strategy__: Iterate through the string in reverse, adding the current index to a new string. Compare the final new string to the input string. Since string concatenation creates a new string, time complexity is actually O(n<sup>2</sup>).  
__Complexity__: O(N<sup>2</sup>) Time | O(N) Space  

### Solution 2  
__Strategy__: Instead of initializing a new string, iterate through the array in reverse and pushing each index into an array. Join the array into a string at the end. This reduces time complexity to O(n).  
__Complexity__: O(N) Time | O(N) Space  

### Solution 3  
__Strategy__: Use recursion - if first and last indexes are equal, return isPalindrome(middle). We do n/2 operations, which converges to O(n) time complexity. Even though we do not store additional strings, due to recursive call stack frames, space complexity will still be O(n). If tail recursion is used, call stack frames can be replaced as recursive calls are made, making space complexity O(1). Tail recursive functions are dependent on language/compiler.  
__Complexity__: O(N) Time | O(N) Space  

### Solution 4  
__Strategy__: Iterative solution - create left and right index pointers. If they are equal, move the pointers inwards, if not, return false. Since nothing is stored except for 2 pointers, space complexity is O(1).
__Complexity__: O(N) Time | O(1) Space  