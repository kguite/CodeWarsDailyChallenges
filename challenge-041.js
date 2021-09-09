//8kyu Filter the Geese

function gooseFilter(birds) {
	let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
	return birds.filter(b => !geese.includes(b));
};