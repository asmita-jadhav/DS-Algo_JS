/****
Program to find the initials of a name. Given a string name, we have to find the initials of the name

Input  : prabhat kumar singh
Output : P K S


******/


let input="prabhat kumar singh";

let temp=input.split(" ");

let output='';

for(let i=0;i<temp.length;i++){
    //console.log(temp[i]);
    output=output+(temp[i].charAt(0).toUpperCase());
}

console.log(output);
