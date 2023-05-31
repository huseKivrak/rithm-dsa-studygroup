////////////////////////////////////////////////

// isPalindrome
// Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
// (a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")

// console.log(isPalindrome('LEVEL')) //true
// console.log(isPalindrome('RACECAR')) //true
// console.log(isPalindrome('husEyin')) //false



//////////////////////////////////////////////////////////////

//largestSwap
/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
'largestSwap' should return a boolean.

For example, if 27 is our in put, we should return false because swapping the digits gives us 72, and 72 !< 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

////////////////////////////////////////////////

//splitStrings
/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace
the missing second character of the final pair with an underscore ('_').
*/

// console.log(solution('abc')) // should return ['ab', 'c_']
// console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']
////////////////////////////////////////////////

// two sum
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/



////////////////////////////////////////////////

//formNewString

/* const multiplyByThree = number => number * 3;
const divideByTwo = number => number / 2;

Create a function 'formNewString' that takes a string (contains UPPERCASED A-Z characters only)
as an argument and returns a new string with unique characters following its amount in the original string, in the same order.
However, if the amount of a character is odd, multiply it by 3 using your function 'multiplyByThree', otherwise, divide it by 2 using your function 'divideByTwo'.
Ex:	formNewString('DACCBDAAACD'); → '9D2A9C3B'
	formNewString('FUNNY'); → '3F3U1N3Y'
*/

// console.log(formNewString('DACCBDAAACD')); //→ '9D2A9C3B'
// console.log(formNewString('FUNNY')); //→ '3F3U1N3Y'

////////////////////////////////////////////////

//itemRetriever
/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
*/

// const favoriteAuthors = [
//     { name: 'Ernest Hemingway' },
//     { name: 'Agatha Christie' },
//     { name: 'J.K. Rowling' },
//     { name: 'Stephen King' },
//   ];

////////////////////////////////////////////////


// potions / playWithNums

//callbacks:
// const countOddNums = (string) => {
//   let oddNums = 0;
//   for(let elem of string){
//     if (elem % 2) oddNums++;
//   }
//   return oddNums;
// }

// const countEvenNums = (string) => {
//   let evenNums = 0;
//   for (let elem of string){
//   if (elem % 2 === 0) evenNums++;
//   }
// return evenNums;
// }

/*
There're 2 types of potions:
Counting evens potion: "E"
Counting odds potion: "O"
If "E" appears, replace it by using your 'countEvenNums' function to count the number of even numbers in the longer part of the string. If "E" is in the center of the string, count to the left.
If "O" appears, replace it by using your 'countOddNums' function to count the number of odd numbers in the shorter part of the string. If "O" is in the center of the string, count to the right.
*/

// console.log(playWithNums('3E20914O78')); //→ '3420914178'
// console.log(playWithNums('12O3E4567')); //→ '121314567'
// console.log(playWithNums('2E93O5741')); //→ '219335741'
// console.log(playWithNums('2O93E5741')); //'209315741'

////////////////////////////////////////////////

// potions / usePotions

//callbacks:
// const addOne = num => num + 1;
// const subtractOne = num => num - 1;

// There are two types of potions:
// Growing potion: "A"
// Shrinking potion: "B"
// If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
// If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
// Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

// console.log(usePotions("3A78B51"))// ➞ "47751") 3 grows to 4, 8 shrinks to 7
// console.log(usePotions("9999B")) // ➞ "9998"
// console.log(usePotions("9A12A3")) // ➞ "10123"
// console.log(usePotions("567")) // ➞ "567"

////////////////////////////////////////////////

// //checklist

/*
Create a function "checklist" that will take an array as argument (an array of food items). "checklist" should return a function "purchased" that
also takes an array of food items as an argument. If all items did not get purchased, return "{allPurchased: false, missing: [<missing items>]}".
If all food items were purchashed, {allPurchased: true, missing: []}
*/

// const func = checklist(["apple", "rice", "wine"])
// func(["mango", "bread", "lettuce", "apple"]) // expected: {allPurchased: false, missing: ["rice", "wine"]}
// func(["rice", "bread", "wine", "lettuce", "apple"]) // expected: {allPurchased: true, missing: []}

////////////////////////////////////////////////

//balancedBrackets (hard!)
/*Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic. Make your solution work for all types of brackets: () [] {}
*/

// console.log(balancedBrackets("()[]{}"));                           		// -> true
// console.log(balancedBrackets("hi][  "));                              // -> false
// console.log(balancedBrackets("[{random words and such}]"));           // -> true
// console.log(balancedBrackets("[The]Rains(In){Spain}"));               // -> true ->
// console.log(balancedBrackets("[({}Call me Ishmael)]"));               // -> true
// console.log(balancedBrackets("[(]{)}"));                              // -> false
// console.log(balancedBrackets(" gibberish { howdy: partner() }"));     // -> true
// console.log(balancedBrackets(" isThisAFunction?() { notReally();"));  // -> false



////////////////////////////////////////////////

//chessboard
/*
Write a function that provided n (a number) as input,
will return a string representing a chessboard of n x n squares.
*/
// console.log(chessboard(4));

/*
_#_#
#_#_
_#_#
#_#_
*/

////////////////////////////////////////////////

//memoryMaker
/*
Write a function "memoryMaker" that accepts no parameters, and returns a function.
Have the returned function accept a value, and every time the returned function is called,
return an array of all the previously passed values.
*/

////////////////////////////////////////////////
