/***Rearrange characters in a string such that no two adjacent are same
Input: aaabc 
Output: abaca 
****/


//1. Build a Priority_queue or max_heap, pq that stores characters and their frequencies.

let pq=[{
    char:"a",
    freq:3
   
},
{
    char:"b",
    freq:1
},
{
    char:"c",
    freq:1
}
]

let prev={
    char:"#",
    freq:-1
}

let outputStr='';
while(pq.length>0){
    
    outputStr=outputStr+pq[0].char;

    console.log("current : "+pq[0].char+" => "+pq[0].freq);

    pq[0].freq--;
            
    if(prev.freq>0){
        let temp=prev;
        //prev=pq.splice(pq[0],prev);
        pq.push(prev);
            
    }
    prev=pq[0];      

    pq.shift();
    /*prev=pq[0];

    pq.shift();*/

}

console.log(outputStr);


///Complexity