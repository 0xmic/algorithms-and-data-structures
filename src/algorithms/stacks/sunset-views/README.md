# Sunset Views
Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.  

A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.  

The input array names `buildings` contains positive, non-zero integers representing the heights of the buildings. A building at index `i` thus has a height denoted by `buildings[i]`. All of the buildings face the same direction, and this direction is either east or west, denoted by the input string named `direction`, which will always be equal to either `"EAST"` or `"WEST"`. In relation to the input array, you can interpret these directions as right for east and left for west.  

Important note: the indices in the output array should be sorted in ascending order.  

## Example
__Sample Input #1__:
```
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "EAST"
```
__Sample Output #1__:
```
[1, 3, 6, 7]

// Below is a visual representation of the sample input.
//    _
//   | |_ _
//  _| | | |_   _
// | | | | | | | |_
// | | | | | |_| | |
// |_|_|_|_|_|_|_|_|
```
__Sample Input #2__:
```
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "WEST"
```
__Sample Output #2__:
```
[0, 1]
// The buildings are the same as in the first sample
// input, but their direction is reversed
```

## Strategy and Complexity
__Strategy__:
* You can use the same approach for each direction by simply changing the direction you traverse the array of buildings.
* There are multiple ways to solve this problem, but one is to maintain a running maximum of building heights. Loop in the opposite direction that the buildings are facing, and keep track of the maximum building height tha tyou've seen. At each iteration, compare the height of hte current buidling to the running maximum; if the current building is taller, then it can see the sunset; otherwise, it can't. Finally, at each iteration, update the running maximum.
* Another way to solve this problem is to use a stack. Loop in the direction that the buildings are facing, and add the index of the current building to the stack at the end of each iteration. Before adding elements to the stack, compare the current building height to buildins at the top of the stack. Pop off the top of the stack until the current building height is shorter than the height of the building at the top of the stack. This will remove all buildings that are blocked from seeing the sunset by the current building. At the end of the algorithm, the stack will only contain elements that can see the sunset.

__Complexity__: O(n) Time | O(n) Space
* n = length of input array
