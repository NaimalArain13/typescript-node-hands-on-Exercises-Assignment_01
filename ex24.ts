// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let Country = "Pakistan";
console.log(Country === "Pakistan");
console.log(Country !== "Pakistan");

// • Tests using the lower case function
let lowerCase = Country.toLowerCase;
console.log(Country === "pakistan");


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1  = 24;
console.log(number1 === 2*12);
console.log(number1 !== 24);
console.log(number1 > 5/45);
console.log(number1 < 89);
console.log(number1 >= 24);
console.log(number1 <= 3 * 8);

// • Tests using "and" and "or" operators
let number = 8;
console.log(number === 8 && number > 2);
console.log(number !== 8 || number <= 7);

// • Test whether an item is in a array
let myNumbers: number[] = [2,4,6,8,10];
let ItemToCheck: number = 3;   //define the number to be checked in the array
//using includes() method to check if the item is in the array and stored in the varaible called IsInArray
let IsInArray:boolean = myNumbers.includes(ItemToCheck)  
console.log("Is in array" +  IsInArray); 
// • Test whether an item is not in a array 
let ItemToCheck2: number = 9;
//using NOT logical operator along with includes() to check if the item is not in array and stored it in the variable IsInArray2
let IsInArray2:boolean = !myNumbers.includes(ItemToCheck)  
console.log("Is not in array" +  IsInArray2);