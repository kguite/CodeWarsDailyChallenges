//8kyu Square(n) Sum

function squareSum(numbers){
	  let total = 0,
		square = numbers.map(item => item * item);
	  for (let i = 0; i < square.length; i++) {
		total += square[i];
	  }
	  return total;
	}