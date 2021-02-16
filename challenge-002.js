// 8ky Convert Number to Reversed Array of digits:

function digitize(n) {
	return n.toString().split('').reverse().map(Number);
	  }