//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
// ["2", 5, "11", 4] => 22

// first example isn't going to work but we're goign to see why:

function couldBeNumSum(arr){
	return arr.reduce( (acc, c) => acc + Number(c), 0)
}

couldBeNumSum(["2", 5, "11", 4])

// this returned 25114.  it concatenated it all together, adding a string to an accumulation turns it into a string. let's try adding Number.

// That worked! now the answer is 22.

// Something funky: get rid of the 0. (remember 0 saves you headache). if the 0 is removed, the concatenation returns.  The accumulation becomes a string BEFORE the Number conversion happens.  If we set the intial value with the 0 at the end, what we're basically saying is set it as a number, and not a string. the 0 saved it.  Can also make sure that acc is a number as well.

// another option: 	return arr.reduce( (acc, c) => +acc+ +c, 0)

// that's a unary operator, and if you put a plus sign in front of the acc too... that also works to keep it all a number.  In this case, whitespace matters. if you skip the space between +acc and +c, it'll mess up.










