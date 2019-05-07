/*** Reverse alphabetic characters in a string by pertaining special characters as it is.

Input: #a$b%c&d* 
Output: #d$c%b&a* 

****/

let input='#a$b%c&d';

let temp=[];
let tempchar='';
for(let c=0;c<input.length;c++){

    tempchar=input[c].charCodeAt();
    if(tempchar>=65 && tempchar<=90 || tempchar>=97 && tempchar<=122){
        temp.push(input[c]);
    }
}

let temp1=temp.reverse();

console.log(temp1);

for(let c=0;c<temp1.length;c++){        
    input[c]=temp1[c];
}

console.log(input);

///Complexity
