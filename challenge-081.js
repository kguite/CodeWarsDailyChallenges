//8kyu BMI

// getting brave with some ternaries!

// forgot about Math.pow - DOH.

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
bmi <= 25 ? "Normal" :
bmi <= 30 ? "Overweight" : "Obese";

// forgot about Math.pow - DOH. Another simple, easy to read solution:

function bmi(weight, height) {
	  var result = weight/Math.pow(height,2) 
	  
	  if (result <= 18.5) {
		return "Underweight";
	  } else if (result <= 25) {
		return "Normal";
	  } else if (result <= 30) {
		return "Overweight";
	  } else {
		return "Obese";
	  }
	  
	}
	