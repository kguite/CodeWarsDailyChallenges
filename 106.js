// 8kyu Check the Exam
	
function checkExam(array1, array2) {
	  let points = 0;
	  
	  array2.map((x, y) => {
		if (x === "") {
		  points += 0;
		} else if (x === array1[y]) {
		  points += 4;
		} else {
		  points += -1;
		}
	  })
	  
	  return points > 0 ? points : 0;
	}