# Min Number Of Coins For Change  
Given an array of positive integers representing coin denominations and a single non-negative integer `n` representing a target amount of money, write a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations.  
If it's impossible to make change for the target amount, return `-1`.  
Note that an unlimited amount of coins is at your disposal.  

## Example  
__Sample Input__  
```
n = 7  
denoms = [1, 5, 10]  
```
__Sample Output__
```
3 // 2x1 + 1x5
```

## Solution & Complexity  
__Strategy__:  
* Build an array of the minimum number of coins needed to make change for all amounts between 0 and n inclusive. Note that no coins are needed to make change for 0: in order to make change for 0, you do not need to use any coins.  
* Build up the array one denomination at a time. In other words, find the minimum number of coins needed to make change for all amounts between 0 and n with only one denomination, then with two, etc., until you use all denominations.  
* Apply the following formula while iterating through the array: 
```
if denom <= amount: 
    nums[amount] = min(nums[amount],  
                       1 + nums[amount - denom])  
```
__Complexity__: O(Nd) Time | O(N) Space  
* N = target amount
* d = # of denominations
