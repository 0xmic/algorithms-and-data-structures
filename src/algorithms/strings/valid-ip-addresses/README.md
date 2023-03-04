# Valid IP Addresses
You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three `.`s in the string.  

An IP address is a sequence of four positive integers that are separated by `.`s, where each individual integer is within the range `0 - 255`, inclusive.  

An IP address isn't valid if any of the individual integers contains leading `0`s. For example, `"192.168.0.1"` is a valid IP address, but `"192.168.00.1"` and `"192.168.0.01"` aren't, because they contain `"00"` and `"01"`, respectively. Another example of a valid IP address is `"99.1.1.10"`; conversely, `"991.1.1.0"` isn't valid, because `"911"` is greater than 255.  

The function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created from the string, the function should return an empty list.

## Example
__Sample Input__:
```
string = "1921680"
```
__Sample Output__:
```
[
    "1.9.216.80",
    "1.92.16.80",
    "1.92.168.0",
    "19.2.16.80",
    "19.2.168.0",
    "19.21.6.80",
    "19.21.68.0",
    "19.216.8.0",
    "192.1.6.80",
    "192.1.68.0",
    "192.16.8.0"
]
```

## Strategy and Complexity
__Strategy__:
* Each IP address is comprised of four parts. You can find one valid part at a time and then combine sets of four valid parts to create one valid IP address.
* Go through all possible combinations of valid IP-address parts. Do this be generating a valid first part, then generating all valid second parts given the first part, then finally all valid third and fourth parts given first and second parts. If you find a set of four valid parts, then simply combine them together and add that IP address to some final array. 
* You can start by creating all the possible first parts of an IP address; these will be substrings of the main string that start at the first character and that have lengths 1, 2 and 3. Then you can repeat this process for the second part, where the substrings in this part will start where the first part ended. Then same thing applies for the third and fourth parts. After going through all possible parts and storing valid IP addresses, you will have found all IP addresses that can be formed from the input string.  

__Complexity__: O(1) Time | O(1) Space
