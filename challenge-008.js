//8kyu Sum of Positive

function positiveSum(arr) {
	let sum = 0;
	for(i = 0; i <arr.length; i++) {
	if(arr[i] > 0) {
	sum += arr[i];
	}
}
	return sum
}