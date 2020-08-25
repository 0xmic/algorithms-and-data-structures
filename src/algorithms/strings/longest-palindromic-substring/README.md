# Longest Palindromic Substring  
Write a function that, given a string, returns its longest palindromic substring.  
A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.  
You can assume that there will only be one longest palindromic substring.  

## Example  
__Sample Input__:  
```
string = "abaxyzzyxf"
```

__Sample Output__:  
```
"xyzzyx"
```  

## Solution & Complexity  
__Strategy__:  
* Try enerating all possible substrings of the input string and check for their palindromicity. The runtime of the isPalindrome check is O(n) time. The total runtime of this approach is O(n^3) time.  
* Recognize that a palindrome is a string that is symmetrical with respect to its center, which can either be a character (in the case of odd-length palindromes) or an empty string (in the case of even-length palindromes). Thus, you can check the palindromicity of a string by simply expanding from its center and making sure that characters on both sides are indeed mirrored.   
* Traverse the input string, and at each index, apply the logic mentioned in point #2. This reduces the runtime to O(n^2).

__Complexity__: O(N^2) Time | O(1) Space  
* N = length of the input string