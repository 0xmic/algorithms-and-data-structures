# STRATEGY:
# Iterative solution. Store last two fib numbers in an array.
# COMPLEXITY:
# O(n) Time | O(1) Space

def getNthFib(n):
  lastTwo = [0, 1]
  counter = 3
  while counter <= n:
  	nextFib = lastTwo[0] + lastTwo[1]
  	lastTwo[0] = lastTwo[1]
  	lastTwo[1] = nextFib
  	counter += 1

  return lastTwo[1] if n > 1 else lastTwo[0]