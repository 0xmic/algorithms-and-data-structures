# Algorithms and Data Structures

This repository contains examples of many popular algorithms and data structures. Examples will be based in popular programming languages with an emphasis on JavaScript.

Each algorithm and data structure has its own separate README with related explanations and links for further reading.

*☝ Note that this project is meant to be used for learning and researching purposes only and it is **not** meant to be used for production.*

## Data Structures
A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

* Arrays
* Strings
* Linked List
* Doubly Linked List
* Queue
* Stack
* Hash Table
* Linked Hash Map
* Heap
* Priority Queue
* Trie
* Tree
    * Binary Search Tree
    * AVL Tree
    * Red-Black Tree
    * Segment Tree
    * Fenwick Tree
* Graph - directed/undirected/weighted
* Disjoint Set
* Bloom Filter

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules that precisely define a sequence of operations.

### Algorithms by Category
* **Arrays**
  * [Two Number Sum](src/algorithms/arrays/two-number-sum)
  * Three Number Sum
  * Smallest Difference
  * Move Element to End
  * Four Number Sum
  * Subarray Sort
  * Largest Range
  * Min Rewards
  * Zigzag Traverse
  * Apartment Hunting
  * Calendar Mathing

* **Binary Search Trees**
  * Find Closest Value in BST
  * BST Construction
  * Validate BST
  * BST Traversal
  * Same BSTs

* **Binary Trees**
  * Branch Sums
  * Invert Binary Tree
  * Max Path Sum in Binary Tree
  * Iterative In-order Traversal

* **Dynamic Programming**
  * Max Subset Sum No Adjacent
  * Number of Ways to Make Change
  * Min Number of Coins for Change
  * Levenshtein Distance
  * Max Sum Increasing Subsequence
  * Longest Common Subsequence
  * Min Number of Jumps
  * Water Area
  * Knapsack Problem
  * Disk Stacking
  * Numbers in Pi
  * Max Profit with K Transactions
  * Pallindrome Partitioning Min Cuts
  * Longest String Chain
  * Longest Increasing Subsequence

* **Famous Algorithms**
  * Kadane's Algorithm
  * Topological Sort
  * Knuth-Morris-Pratt Algorithm

* **Graphs**
  * Depth-first Search
  * Single Cycle Check
  * Breadth-first Search
  * River Sizes
  * Youngest Common Ancestor
  * Boggle Board
  * Rectangle Mania
  * Airport Connections

* **Heaps**
  * Main Heap Construction
  * Continuous Median

* **Linked Lists**
  * Linked List Construction
  * Remove Kth Node from End
  * Find Loop
  * Reverse Linked List
  * Merge Linked Lists
  * LRU Cache

* **Recursion**
  * Nth Fibonacci
  * Product Sum
  * Permutations
  * Powerset
  * Lowest Common Manager
  * Interweaving Strings
  * Number of Binary Tree Topologies

* **Searching**
  * Binary Search
  * Find Three Largest Numbers
  * Search in Sorted Matrix
  * Shifted Binary Search
  * Search For Range
  * Quickselect

* **Sorting**
  * Bubble Sort
  * Insertion Sort
  * Selection Sort
  * Quick Sort
  * Heap Sort
  * Merge Sort

* **Stacks**
  * Min Max Stack Construction
  * Balanced Brackets

* **Strings**
  * Palindrome Check
  * Caesar Cipher Encryptor
  * Longest Palindrome Substring
  * Group Anagrams
  * Longest Substring Without Duplication
  * Underscorify Substring
  * Pattern Matcher
  * Smallest Substring Containing

* **Tries**
  * Suffix Triie Construction
  * Multi String Search

## Space/Time Complexity
Algorithm complexity is a measure which evaluates the order of the count of operations performed by a given algorithm as a function of the size of the input data. Put simply, complexity is a rough approximation of the number of steps necessary to solve or execute an algorithm.

An algorithm problem may have multiple solutions, and some solutions may be better than others. What makes one solution better than another is the solution's complexity. 

Complexity can be divided into:
* Time: a measure of how fast a solution runs
* Space: a measure of how much memory an algorithm uses

When comparing two solutions, the better solution is the one with better space and time complexity. If one solution has better of one complexity and worse of the other, it is up to the programmer to choose the best solutions for the given use case.

To perform an operation or function on a given data structure (or on the underlying set of data values) will take time and memory. Different data structures will have different time and space complexity ramifications for the functions and operations that they support.

### Big O Notation
Big O notation is a a mathematical notation that describes the limiting behavior of a function when the arguments tend towardsd a particular value or infinity - otherwise called asymptotic notation. Put simply, Big O notation is used to classify algorithms according to how their running time or space requirements grow as the input size grows. The unit of Big O notation is measured in elementary operations. 

When measuring elementary operations in an algorithm's complexity, we can drop constants and fixed time/space operations. (i.e. O(2N^2 + N + 1) ≈ O(N^2))

In regards to computer science, Big O refers to the _worst case_ scenario. 

If an algorithm contains multiple different input values, reduce and keep both. (i.e. O(M^2 + 2N + 1) ≈ O(M^2 + N))

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)

Below is the list of some of the most used Big O noations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
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

## Useful Resources
* [JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms)