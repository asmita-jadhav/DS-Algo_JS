/***
Input : arr[] = {-2, 0, 1, 3}
        sum = 2.
Output : 2
Explanation :  Below are triplets with sum less than 2
               (-2, 0, 1) and (-2, 0, 3) 
  
***/


let input=[-2, 0, 1, 3];

let sum=4;

let length=input.length;

let output=[];

for (let i = 0; i < (length-2); i++) {
    let temp=0;
    for(let j=i;j<(i+3);j++){
        temp=temp+input[j];
        console.log(temp);
    }
    if(temp==sum){
        output.push({"0":input[i],"1":input[i],"2":input[i]});
    }
}

console.log(output);
