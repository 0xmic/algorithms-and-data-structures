# Tandem Bicycle
A tandem bicycle is a bicycle that's operated by two people: person A and person B. Both peole pedal the bicycle, but the person that pedals faster dictates the speed of the bicycle. So if person A pedals at a speed of `5` (i.e., `tandemSpeed = max(speedA, speedB) )`.  

You're given two lists of positive integers: one that contains the speeds of riders wearing red shirts and one that contains the speeds of riders wearing blue shirts. Each rider is represented by a single positive integer, which is the speed that they pedal a tandem bicycle at. Both lists have the same length, meaning that there are as many red-shirt riders as there are blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate a tandem bicycle.  

Write a function that returns the maximum possible total speed or the minimum possible total speed of all the tandem bicycles being ridden based on an input parameter, `fastest`. If `fastest = true`, your function should return the maximum possible total speed; otherwise it should return the minumum total speed.  

"Total speed" is defined as the sum of the speeds of all the tandem bicycles being ridden. For example, if there are 4 riders (2 red-shirt riders and 2 blue-shirt riders) who have speeds of `1, 3, 4, 5`, and if they're paired on tandem bicycles as follows: `[1, 4], [5, 3]`, then the total speed of these tandem bicycles is `4 + 5 = 9`.  

## Example
__Sample Input__:
```
redShirtSpeeds = [5, 5, 3, 9, 2]
blueShirtSpeeds = [3, 6, 7, 2, 1]
fastest = true
```

__SampleOutput__:
```
32
```

## Strategy and Complexity
__Strategy__:
* The brute-force approach to solve this problem is to generate every possible set of pairs of riders and to determine the total speed that each of these sets generates. This solution does work, but it isn't optimal.
* When generating the maximum total speed, you want to pair the slowest red-shirt riders with the fastest blue-shirt riders and vice-verse, so as to always take advantage of the largest speeds. When generating the minimum total speed, you want to pair the fastest red-shirt riders with the fastest blue-shirt riders, so as to "eliminate" a large speed by pairing it with another large (larger) speed.
* Sort the input arrays in place, and follow the strategy above. With the inputs sorted, you can find the slowest and largest speeds from each shirt color in constant time.

__Complexity__: O(nlog(n)) Time | O(1) Space
* n = number of tandem bicycles
