# Minimum Waiting Time
You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.  

A query's **waiting time** is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries.  

Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of duration `[1, 4, 5]`, then the total waiting time if the queries were executed in the order of `[5, 1, 4]` would be `(0) + (5) + (5 + 1) = 11`. The first query duration of `5` would be executed immediately, so its waiting time would be `0`, the second query of duration `1` would have to wait `5` seconds (the duration of the first query) to be executed, and the last query qould have to wait the duration of the first two queries before being executed.  

Note: you're allowed to mutate the input array.  

## Example
__Sample Input__:
```
queries = [3, 2, 1, 2, 6]
```

__Sample Output__:
```
17
```

## Strategy and Complexity
__Strategy__:
* Sort the input array in place, and execute the shortest queries in their sorted order. This should allow you to calculate the minimum waiting time.
* Create a variable to store the total waiting time and iterate through the sorted input array. At each input, multiply the number of queries left by the duration of the current query, and add that to the total waiting time.  

__Complexity__: O(nlog(n)) Time | O(1) Space  
* n = number of queries