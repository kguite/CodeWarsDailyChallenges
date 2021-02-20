//8kyu How Good Are You Really?

function betterThanAverage(classPoints, yourPoints) {
	 const avg = (classPoints.reduce((sum, p) => sum + p) + yourPoints) / (classPoints.length + 1)
	 return yourPoints > avg
}
	
	