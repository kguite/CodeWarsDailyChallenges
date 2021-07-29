// 6kyu Duplicate Encoder

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c



function duplicateEncode(word){
	  return word
		.toLowerCase()
		.split('')
		.map( function (v, i, arr) {
		  return arr.indexOf(v) == arr.lastIndexOf(v) ? '(' : ')'
		})
		.join('');
	}
	
	