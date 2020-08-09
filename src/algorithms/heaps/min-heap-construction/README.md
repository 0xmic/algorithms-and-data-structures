# Min Heap Construction  
Implement a `MinHeap` class that supports:  
- Building a Min Heap from an input array of integers.  
- Inserting integers in the heap.  
- Removing the heap's minimum / root value.  
- Peeking at the heap's minimum / root value.  
- Sifting integers up and down the heap, which is to be used when inserting and removing values.  
Note that the heap should be represented in the form of an array.  

### Sample Usage  
```
array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]  

// All operations below are performed sequentially.  
MinHeap(array): - // instantiate a MinHeap (calls the buildHeap method and populates the heap)  
buildHeap(array): - [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41]  
insert(76): - [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76]  
peek(): -5  
remove(): -5 [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 48, 41]  
peek(): 2  
remove(): 2 [6, 7, 8, 24, 8, 24, 24 ,391, 76, 56, 12, 41, 48]  
peek() 6  
insert(87): - [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87]  
```

## Solution & Complexity  
__Strategy__:  
* For the buildHeap(), remove(), and insert() methods of the Heap, you will need to use the siftDown() and siftUp() methods. These two methods should essentially allow you to take any node in the heap and move it either down or up in the heap until it's in the final, appropriate position. This can e done be comparing the node in question to its child nodes in the case of siftDown() or to its parent node in the case of siftUp().  
* In an array-based Heap, you can easily access a node's children nodes and parent node by using the nodes' indices. If a node is located at index i, then its children nodes are located at indices 2 * i + 1 and 2 * i + 2, and its parent node is located at index Mathh.floor((i - 1)/2).  
* To implement the buildHeap() method, you can either sift every node in the input array down to its final, correct position, or you can sift every node in the input array up to its final, correct position. What are the runtime implications of both approaches? Which methods (siftDown() or siftUp()) will insert() and remove() utilize? What about peek()?  

__Comlexity__:  
BuildHeap: O( ) Time | O( ) Space  
SiftDown: O( ) Time | O( ) Space  
SiftUp: O( ) Time | O( ) Space  
Peek: O( ) Time | O( ) Space  
Remove: O( ) Time | O( ) Space  
Insert: O( ) Time | O( ) Space