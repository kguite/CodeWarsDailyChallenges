// 8kyu Invert Values


function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}