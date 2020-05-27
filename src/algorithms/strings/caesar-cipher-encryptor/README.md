# Caesar Cipher Encryptor  
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.  
Note that letters should "wrap" around the alphabet; in other words, the letter `z` shifted by one returns the letter `a`.  

## Example  
__Sample Input__:  
```
string = "xyz"
key = 2
```
__String Output__:
```
"zab"
```  

## Solution & Complexity  
### Solution 1  
__Strategy__: Use unicode values - each language may have special functions to convert characters to unicode values and vice versa. Mod the key by `key` at the start to ensure multiple alphabet wrap-arounds are reduced to <= 1.  
__Complexity__: O(N) Time | O(N) Space  

### Solution 2:  
__Strategy__: Create an alphabet array (all lowercase letters, lowercase and uppercase, HEX, etc.). Reference the array index + key to get the new character values.  
__Complexity__: O(N) Time | O(N) Space
