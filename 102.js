// 6kyu Duplicate Encoder

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c



function duplicateEncode(word){
	  let wordArray = word.split('');
	  return wordArray.map(letter => {
		if(wordArray.filter(el => el.toLowerCase() === letter.toLowerCase()).length > 1) return ')';
		return '(';
	  }).join('');
	}
	
	