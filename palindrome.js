// 8kyu is it a palindrome?

const isPalindrome = (x) => {
	  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
	}