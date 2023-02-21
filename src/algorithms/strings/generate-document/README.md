# Generate Document
You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return `true`; otherwise, it should return `false`.  

You're only able to generate the document if the frequency of unique characters in the character string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given `characters = "abcabc"` and `document = "aabbccc"` you *cannot* generate the document because you're missing one `c`.  

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.  

Note: you can always generate the empty string (`""`).

## Example
__Sample Input__:
```
characters = "!lrllWodH eo"
document = "Hello World!" 
```

__Sample Output__:
```
true
```

## Strategy and Complexity
__Strategy__:
* There are multiple ways to solve this problem. Not all approaches have an optimal time complexity. 
* A simple solution is to loop through the `document` string, one character at a tie. At every character, you can count how many times it occurs in the `document` string and in the `characters` string. If it occurs more times in the `document` string than in the `characters` string, then you cannot generate the document. This runs in O(m * (n + m)) time, where `n` is the length of the `characters` string and `m` is the length of the `document` string.
* An alternative solution can solve this problem in `O(n + m)` time. To do so, you need to use a hash table. Start by counting all of the characters in the `characters` string and storing these counts in a hash table. Then, loop through the `document` string, and check if each character is in the hash table and has a value greater than zero. If a character isn't in the hash table or doesn't have a value greater than zero, then you cannot generate the document. If a character is in the hash table and has a value greater than zero, then decrement its value in the hash table to indicate that you've "used" one of these available characters. If you make it through the entire `document` string without returning `false`, then you can generate the document. 

__Complexity__: O(n + m) Time | O(c) Space
* n = # of characters
* m = length of the document
* c = # of unique characters in the characters string
