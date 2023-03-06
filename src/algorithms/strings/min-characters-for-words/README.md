# Minimum Characters For Words
Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.  

For example, the characters `["y", "r", "o", "u"]` are needed to form the words `["your", "you", "or", "yo"]`.  

Note: The input words won't contain any spaces; however, they might contain punctuation and/or special characters.  

## Example
__Sample Input__:
```
words = ["this", "that", "did", "deed", "them!", "a"]
```

__Sample Output__:
```
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
```

## Strategy and Complexity
__Strategy__:
* There are a few ways to solve this problem, but all of them use the same general approach. You need to determine not only all of the unique characters required to form the input words, but also their required frequencies.
* The word that contains the highest frequency of any character dictates how many of those characters are required. For example, given `words = ["A", "AAAA"]` you need 4 `A`s, because the word that contains the most amount of `A`s has 4.
* Use a hash table to keep track of the maximum frequencies of all unique characters that occur across the words. Count the frequency of each character in each word, and use those per-word frequencies to update your maximum-character-frequency hash table. Once you've determined the maximum frequency of each character across all words, you can use the built-up hash table to generate your output array.  

__Complexity__: O(n * l) Time | O(c) Space
* n = number of words
* l = length of the longest word
* c = number of unique characters across all words.
