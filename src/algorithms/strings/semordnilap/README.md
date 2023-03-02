# Semordnilap
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.  

A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. for example, the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".  

The order of the returned pairs and the order of the strings within each pair does not matter.  

## Example
__Sample Input__:  
```
words = ["diaper", "abc", "test", "cba", "repaid"]
```
__Sample Output__:
```
[["diaper", "repaid"], ["abc", "cba"]]
```

## Strategy and Complexity
__Strategy__:  
* Convert the input array into a set, so that you can check if a word exists in the list in constant time.
* After creating the set of words, iterate through the original array. For each word, check if its semordnilap pair is in the word list.

__Complexity__: O(n * m) Time | O(n * m) Space
* n = number of words
* m = length of longest word