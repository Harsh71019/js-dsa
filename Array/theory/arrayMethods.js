const tempArray = ['a', 'b', 'c', 'd', 'e'];

tempArray.pop();
console.log(tempArray); // output will be ['a', 'b', 'c', 'd']
//this will be a o(1) operation since we are just removing e from the end of the array

tempArray.push('f');
console.log(tempArray); // output will be ['a', 'b', 'c', 'd','f']
//this too will be a o(1) operation since we are just adding to end of the array

tempArray.shift();
console.log(tempArray); //output will be ['b', 'c', 'd','f']
// but here the output will be a o(n) operation since we are changing the indices of the array
//and since the first element is getting removed we loop through the entire array and change the
//index of the other elements too

tempArray.unshift('a');
console.log(tempArray); //output will be ['a', 'b', 'c', 'd','f']
//here it inserts the element at the start of the array so its also a o(n) operations

tempArray.splice(0, 3, 'splicingat0');
console.log(tempArray); //output will be ['splicingat0','d', 'f']
//here also its a o(n) operation
