//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr){
	return arr.filter((e, i) => e % i === 0)
		
	}


// whenever i see return a new array, two methods go off as an alarm bell. it's either map or filter. using filter for this one, getting rid of some stuff.

// in above, 22 can't go into 0, so it doesn't show. 1 goes into -6 as -6, if the index can go into the number that's how we know it's a multiple....

// cool thing about filter, can pass in some sort of test and as long as it passes the test, it'll be included in the array. so going to see if it's divisible by.

// filter is going to pop off values each time it runs.

// first time this runs, it's going to pop off 22 and 0, so e will be 22 and i will be 0. can't divide by 0, so filter check fails.  next is -6 and 1. since 1 can go into -6, we know the filter array is going to have -6 in it.  next is 32 and index is 2.  2 can go into 32, that passes the filter check, so 32 is going to be included in the array.  next time, it's 82 and 3. does not go in.  next is 9 and 4.  4 cannot go into 9 evenly so it fails and we move on. last, 25 and 5. since 5 can go into 25 evenly, it passes the filter check and we have 25.  This whole array is what's going to be RETURNED from this function.