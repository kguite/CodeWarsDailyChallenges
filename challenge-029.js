// 8kyu Total Amount of Points

//followed instructions here: https://www.youtube.com/watch?v=XJwLcMGIPI0

// separate the values in each string
// sum points for each game
// reduce function iterates through each item and reduces the array to a single value.
// acc is accumulator, running total, game is the item itself
// contained in a function that you pass into the reduce method
//to split the string, use split method and return the 2 values
// array destructuring assigns them to x and y
// nested ternary. if x is bigger than y, we won and got 3 points. if x = y, 1 point(draw), if lost, assign  0points. can also use if statement.
// next, add points to accumulator and return them.
// acc is blank when a reduce function starts, so want to start with an initial value of 0 
function points(games) {
	  return games.reduce((acc, game) => {
		const [x, y] = game.split(':');
		const points = x > y ? 3 : x === y ? 1: 0;
		acc += points;
		return acc;
	  }, 0);
	}
	
// to tidy it up, can convert to an ES6 arrow fuction and an implicit return:

const points = (games) =>
	games.reduce((acc, game) => {
		const [x, y] = game.split(':');
		const points = x> y ? 3 : x === y ? 1 : 0;
		return acc += points;
	}, 0);