// 8kyu Convert Number to Reversed Array of Digits:

function digitize(n) {
	return n.toString().split('').reverse().map(Number);
	}