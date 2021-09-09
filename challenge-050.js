// 8kyu Count of Positives and Sum of Negatives

function countPositivesSumNegatives(input) {
	if (!input || !input.length) return []
  
  let sumPos = input.filter(x=>x>0)
  let sumNeg = input.filter(x=>x<=0)
					
	return [sumPos.length, Math.floor(sumNeg.reduce((s,v)=>s+v,0))]
}