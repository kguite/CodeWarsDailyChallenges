//8kyu Fake Binary

function fakeBin(x){
	return x.split('').map(d => d >= 5 ? '1' : '0').join('')
}