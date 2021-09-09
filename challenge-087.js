//8kyu I love you, a little, a lot


const phrases = [
	  'not at all',
	  'I love you',
	  'a little',
	  'a lot',
	  'passionately',
	  'madly',
	]
	
	const howMuchILoveYou = n => phrases[n % 6]
	
	
	// OR
	
	
	const phrases = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	]
	
	function howMuchILoveYou(n) {
		 return phrases[(n - 1) % phrases.length] 
	}
	