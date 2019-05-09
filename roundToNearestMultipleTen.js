/****
 
Round the given number to nearest multiple of 10
Given a positive integer n, round it to nearest whole number having zero as last digit.

Examples:

Input : 4722
Output : 4720

****/


let input=4722;

let a=(input/10)*10;
let b=a+10;

let output=((input-a) < (b-input))?a:b;

console.log(output);