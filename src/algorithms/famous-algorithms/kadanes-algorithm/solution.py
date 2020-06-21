# O(n) time | O(1)
def kadanesAlgorithm(array):
    maxEndingHere = array[0]
    maxSoFar = array[0]
    for num in array[1:]:
    	maxEndingHere = max(num, maxEndingHere + num)
    	maxSoFar = max(maxSoFar, maxEndingHere)
    return maxSoFar