# Suffix Trie Construction   
Write a `SuffixTrie` class for a Suffix-Trie-like data structure. The class should have a `root` property set to be the root node of the trie and should support:  
- Creating the trie from a string; this will be done by calling the `populateSuffixTrieFrom` method upon class instantiation, which should populate the `root` of the class.  
- Searching for strings in the trie.  
Note that every string added to the trie should end with the special `endSymbol` character: `"*"`.

## Example  
__Sample Input__:  
```
string = "babc"  
```

__Sample Output__:  
```
The structure below is the root of the trie.  
{
	"c": {"*": true},
	"b": {
		"c": {"*": true},
		"a": {"b": {"c": {"*": true}}},
	},
	"a": {"b": {"c": {"*": true}}}
}
```

__Sample Input (for searchin gin the suffix trie above)__:  
```
string = "abc"  
```

__Sample Output (for searching in the suffix trie above)__:  
```
true
```

## Solution & Complexity  
* Building a suffix-trie-like data structure consists of essentially storing every suffix of a given string in a trie. To do so, iterate through the input string one character at a time and insert every substring starting at each character and ending at the end of the string into the trie.  
* To insert a string into the trie, start by adding the first character of the string into the root node of the trie and mapping it to an empty hash table if it isn't already there. Then, iterate through the rest of the string inserting each of the remaining characters into the previous character's corresponding node (or hash table) in the trie, making sure to add an endSymbol "\*" at the end.  
* Searching the trie for a specific string should follow a nearly identical logic to the one used to add a string in the trie.  

__Complexity__:  
* Creation: O(N^2) Time | O(N^2) Space  
* Searching: O(M) Time | O(1) Space  

- N: lenth of the input string  
- M: length of the input string being searched for  