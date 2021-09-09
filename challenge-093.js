//8kyu filling an array

const arr = n => Array.from({length: n}, (_, i) => i);


// OR

function arr(n){
	  var newArr = [];
	  for(var i = 0; i < n; i++){
		newArr.push(i);
	  }
	  return newArr;
	}
	