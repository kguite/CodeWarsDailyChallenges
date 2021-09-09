//8kyu Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges (ages) {

	let max = Math.max(...ages),
		min = Math.min(...ages)
		diff = max - min
		
	return [min, max, diff]
}