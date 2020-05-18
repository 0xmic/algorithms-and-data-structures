# STRATEGY:
# Naive recursive solution
# COMPLEXITY:
# O(2^n) Time | O(n) Space

def getNthFib(n):
    if n == 2:
    	return 1
    elif n == 1:
    	return 0
    else:
    	return getNthFib(n - 1) + getNthFib(n - 2) 
