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

let inputTemp=input.split('');
    
for(let c=0;c<inputTemp.length;c++){        
    tempchar=inputTemp[c].charCodeAt();
    //console.log(tempchar);
    if(tempchar>=65 && tempchar<=90 || tempchar>=97 && tempchar<=122){        
        inputTemp[c]=temp.pop();
    }        
}

let output=inputTemp.join("");
console.log(output);

///Complexity
