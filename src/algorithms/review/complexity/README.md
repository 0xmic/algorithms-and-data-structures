# Space/Time Complexity
Algorithm complexity is a measure which evaluates the order of the count of operations performed by a given algorithm as a function of the size of the input data. Put simply, complexity is a rough approximation of the number of steps necessary to solve or execute an algorithm.

An algorithm problem may have multiple solutions, and some solutions may be better than others. What makes one solution better than another is the solution's complexity. 

Complexity can be divided into:
* Time - a measure of how fast a solution runs
* Space - a measure of how much memory an algorithm uses

When comparing two solutions, the better solution is the one with better space and time complexity. If one solution has better of one complexity and worse of the other, it is up to the programmer to choose the best solution for the given use case.

To perform an operation or function on a given data structure (or on the underlying set of data values) will take time and memory. Different data structures will have different time and space complexity ramifications for the functions and operations that they support.

## Big O Notation
Big O notation is a a mathematical notation that describes the limiting behavior of a function when the arguments tend towards a particular value or infinity - otherwise called asymptotic notation. Put simply, Big O notation is used to classify algorithms according to how their running time or space requirements grow as the input size grows. The unit of Big O notation is measured in elementary operations. 

When measuring elementary operations in an algorithm's complexity, we can drop constants and fixed time/space operations.  
- i.e. O(2N<sup>2</sup> + N + 1) ≈ O(N<sup>2</sup>)

In regards to computer science, Big O refers to the _worst case_ scenario.  

If an algorithm contains multiple different input values, reduce and keep both.  
- i.e. O(M<sup>2</sup> + 2N + 1) ≈ O(M<sup>2</sup> + N)

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9,000                            |
| **O(N^2)**     | 100                          | 10,000                         | 1,000,000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |
