//8kyu Sum the Strings: Array Edition


function sumArr(a, b) {
	  return a.map((x, i) => String(Number(x) + Number(b[i])))
	}