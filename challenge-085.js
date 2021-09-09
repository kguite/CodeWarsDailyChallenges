//8kyu Beginner Series #1 School Paperwork

function paperwork(n, m) {
	  if (n < 0){
		return 0; 
	  } if (m < 0) {
		return 0;
	  }else {
		return n * m
	  }
	}
	
	// OR
	
	function paperwork(n, m) {
		  return n > 0 && m > 0 ? n * m : 0
		}
		
		