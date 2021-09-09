//8kyu Powers of Two


function powersOfTwo(n){
	  var result = [];
	  for (var i = 0; i <= n; i++) {
		result.push(Math.pow(2, i));
	  }
	  return result;
	}
	
	
	// OR 
	
	function powersOfTwo(n) {
		  return Array.from({length: n + 1}, (v, k) => 2 ** k);
		}
		
		