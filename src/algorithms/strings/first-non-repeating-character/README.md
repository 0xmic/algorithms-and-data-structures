# First Non-Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.  

The first non-repeating character is the first character in a strin that occurs only once.  

If the input string doesn't have any non-repeating characters, your function should return `-1`.  

## Example
__Sample Input__:
```
string = "abcdcaf"
```

___Sample Output__:
```
1 // The first non-repeating character is "b" and is found at index 1.
```

## Strategy and Complexity
__Strategy__
1. One way to solve this problem is with nexted traversals of the string: you start by traversing the string, and for each character that you traverse, you traverse through the entire string again to see if the character appears anywhere else. The first index at which you find a character that doesn't appear anywhere else in the string is the index that you return. This approach works, but is not optimal.
2. Hash tables are commonly used to keep track of frequencies. Build a hash table, where every key is a character in the string and every value is the corresponding character's frequency in the input strin. You can traverse the entire strin once to fill the hash table, and then with a second traversal throuh the string (not a nested traversal), you can use the hash table's constant-time lookups to find the first character with a frequency of `1`.  

__Complexity__
Solution 1: O(n^2) Time | O(1) Space
- n = length of the input string

Solution 2: O(n) Time | O(1) Space
- n = length of the input string