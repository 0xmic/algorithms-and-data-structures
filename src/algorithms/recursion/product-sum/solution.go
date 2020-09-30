package main

type SpecialArray []interface{}

// O(n) time | O(d) space - where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of "special" arrays in the array
func ProductSum(array SpecialArray) int {
	return helper(array, 1)
}

func helper(array SpecialArray, multiplier int) int {
	sum := 0
	for _, el := range array {
		if cast, ok := el.(SpecialArray); ok {
			sum += helper(cast, multiplier+1)
		} else if cast, ok := el.(int); ok {
			sum += cast
		}
	}
	return sum * multiplier
}