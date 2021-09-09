// 8kyu Will You Make It?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	const canGo = mpg * fuelLeft;
	return canGo > distanceToPump;
	};