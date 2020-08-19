# Permutations  
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.  
If the input array is empty, the function should return an empty array.  

## Example  
__Sample Input__  
```
array = [1, 2, 3]
```  

__Sample Output__  
```
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```  

## Solution & Complexity  
__Strategy__:  
* A permutation is defined as a way in which a set of things can be ordered. Thus, for the list [1, 2, 3], there exist some permutations starting with 1, some starting with 2, and some starting with 3. For the permutations starting with 1, there will be a permutation where 2 is the second number and one where 3 is the second number. for permutations starting with 3, there will be a permutation where 1 is the second number and one where 2 is the second number. The idea is that, in order to construct a permutation, we can pick a random number from our list to be the first number, then we can pick a random number from the remaining list (without the first number) to be the second number, then we can pick a random number from the remaining list (without the first and second numbers) to e the third number, and we can repeat the process until we exhaust all of our list of numbers. At that point, we will have constructed a valid permutation. How can we implement this construction algorithmically, without picking numbers at random?  

Solution 1:   
* Iterate through the list of numbers, and begin constructing new permutations starting wtih each number. For each permutation that you've begun constructing, remove the number already used (the first number of each permutation) from the list of numbers - you'll likely have to make copies of the original list. Repeat this process by recursively iterating through the mutated lists of numbers, appending numbers to the corresponding permutations you've already begun constructing and then removing those numbers from the respective mutated lists; repeat this until your mutated lists are empty, at which point your constructed permutations will be as big as the original list and will be valid permutations.  

Solution 2:  
* It is not necessary to create so many mutated lists of numbers. An alternative approach would be to rely on the original list of numbers without ever copying it or removing from it. Simply swap numbers in the array and grab a snapshot. Start with the original array and put a pointer at the first number. Add another pointer to the second input. Add more pointers until you reach the end of the array. Next, starting from the second index, swap array[1] with array[2]. Take a snapshot and then roll-back. Continue iterating through each permutation, swapping the values at each pointer, taking a snapshot, and reverting before swapping next positions.    

__Complexity__:  
__Solution 1__: O(N<sup>2</sup> x N!) Time | O(N x N!) Space  
Time:  
* N!: # of permutations  
* N: total of (N * N!) calls to the helper method  
* N: each call will take O(N)

Space:  
* N!: # of permutations that are stored in the array
* N: each permutation is of length N  

__Solution 2__: O(N! x N) Time | O(N x N!) Space  
Time:  
* Still have N! leaves with approximately N! x N calls to the helper method. However, the swapping is in constant time. 
