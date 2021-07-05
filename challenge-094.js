//8kyu Stringy String

const stringy = size => "10".repeat(size).slice(0,size);


//PREP
//Parameters: a string of any positive length
// Return: a string of "10" repeated as many times as size is specified,
// Example:  so if size = 2, the output is "10".  If size = 6, the output is "101010".

// slice method extracts a section of a string and returns it as a new string, without modifying the original string.  Above, .slice is supplied with the beginningIndex(0 and the end/length (size)
