

// String Array Duplicates

function dup(arr) {
  return arr.map((str)=>
  str.split('').filter((e,i)=>e !== str[i-1]).join('')
)
};


