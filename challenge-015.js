//8kyu Beginner - Lost without a Map
//my solution attempt:
const originalArray = [];
 
function maps(x) {
  return x * 2;
}
 
const newArray = originalArray.map(maps);

console.log(newArray); 

// the actual solution:

function maps(x){
	  return x.map(n => n * 2);
	}
	
//or 

maps = x => x.map(e => e * 2);

//or 

const maps = arr => arr.map( x => x * 2 )

