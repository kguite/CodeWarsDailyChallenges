//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareArr(a, b){
	return a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
}
console.log(compareArr([2, 2, 2], [2,2,2]))
// the 0 lets you set the type as the number and helps get around weird edge cases when using reduce.

// first reduce will take in the array and reduce every number inside the array to its square, then add each of those squares to an accumulator. so the full value will end up being one number. (REDUCED TO ONE SUM).

// same thing with B, but instead of a square it's going to be a cube.

// this is one way of many to solve this


// taking in the array, reduce it.
//first array is squared, second is cubed.


//first reduce is going to grab first array. it's going to run 3 times (once for each value). first time, 2 is the current value. 2 to the 2nd is 4, so 4 is going into the accumulator.

// then reduce runs again, current value becomes the next 2, 2 to the 2nd is 4, 4 gets added to the accumulation, now we're at 8.

// it runs again for the last 2, 2 to the 2nd is 4, so 8 + 4 = 12. The whole reduce on the left side of > reduces to 12.

// on the right side, same again, run once for each of the 2s.

// 2 to the 3rd is 8, so 8 goes into the accumulator. second time, 2 goes into the current value, cubed, then added to the accumulator (now at 16). for the third time, again, 8 is added to accumulator and it's reduced to 24.  

// so left is 12, right is 24, 12 is not bigger than 24, so false is printed to the console.