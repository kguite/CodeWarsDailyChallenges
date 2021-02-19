// 8kyu Count by X

function countBy(x, n) {
	var z = [];
	for (let i = x; z.length < n; i += x){
		z.push(i)
}
	return z;
}