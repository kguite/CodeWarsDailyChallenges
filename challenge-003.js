// 8kyu Reversed Strings

function solution(str){
	let newString = "";
		for (let i = str.length - 1; i >= 0; i--) {
			newString += str[i];
		}
		return newString;
	}
	
	