# Group Anagrams  
Write a function that takes in an array of strings and groups anagrams together.  
Anagrams are string made up of exactly the same letters, where order doesn't matter. For example, `"cinema"` and `"iceman"` are anagrams; similarly, `"foo"` and `"ofo"` are anagrams.  
Your function should return a list of anagram groups in no particular order.  

## Example  
__Sample Input__:  
```
words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
```

__Sample Output__:  
```
[["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
```

## Solution & Complexity  
__Strategy__:  
* Rearrange every input string such that each string's letters are ordered in alphabetical order.  
* For any two of the resulting alphabetized strings that are equal to each other, their original strings (with their letters in normal order) must be anagrams. With this result, you can bucket all of the resulting strings together, all the while keeping track of their original strings, to find the groups of anagrams.  
* One approach would be to store the resulting strings mentioned in point 1 in a hash table and find the groups of anagrams using this table.  

__Complexity__:  
* Solution 1: O(W * N * log(N) + N * W * log(W)) Time | O(WN) Space  
* Solution 2 (above strategy): O(W * N * log(N)) Time | O(WN) Space  
- N = length of the longest word  
- W = # of words