# Balanced Brackets  
Write a function that takes in a string made up of brackets (`(`, `[`, `{`, `)`, `]`, and `}`) and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.  
A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in `[(])`.  

## Example  
__Sample Input__:  
```
string = "([])(){}(())()()"
```

__Sample Output__:  
```
true // it's balanced  
```

## Solution & Complexity  
__Strategy__:  
* If you iterate through the input string one character at a time, there are two scenarios in which the string will be unbalanced: either you run into a closing bracket with no prior matching opening bracket or you get to the end of the string with some opening brackets that haven't been matched. An auxiliary data structure can be used to keep track of all the brackets and efficiently check if you run into an unbalanced scenario at every iteration.  
* A stack can be used to store opening brackets as you traverse the string. The Last-In-First-Out property of the stack should allow you to match any closing brackets that you run into against the most recent opening brackets, if one exists, in which case you can simply pop it out of the stack. You will also need to check that there are no unmatched opening brackets once you've finished traversing through the string.  

__Complexity__: O(N) time | O(N) space  
* N = the length of the input array