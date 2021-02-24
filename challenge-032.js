//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function tempConvert(f){
	return (f - 32) * 5/9
}

function canCharBattle(){
	let temperature = tempConvert(tempVal)
	if(temperature > 0 ){
		console.log("Char Can Battle")
	}else{
		console.log("Char Can't Battle")
	}
}
canCharBattle(31)