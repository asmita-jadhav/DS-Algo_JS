/*** To check if input is an integer or a string

Input : 127
Output : Integer
Explanation : All digits are in the range '0-9'.

Input : 199.7
Output : String
Explanation : A dot is present.

****/

let input='639856';
let tempchar='';
let isInt=true;

for(let i=0;i<input.length;i++){
    tempchar=input[i].charCodeAt();
    if(tempchar<49 || tempchar>57){
        isInt=false;
        break;
    }
}

let output=(isInt)?'Integer':"String";
console.log(output);