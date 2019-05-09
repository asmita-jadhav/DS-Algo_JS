/*** Make nested array to flat array

Input : [1,2,[3,[4,5],6,7],8]
Output : [1,2,3,4,5,6,7,8]


Explanation : recursive way to perform
****/

let input=[1,2,[3,[4,5],6,7],8];
let temparr=[];

function flat(arr){

        for(let i=0;i<arr.length;i++){            
            if(typeof(arr[i])=="object"){
                flat(arr[i]);
            }else{
                temparr.push(arr[i]);
            }
        }

}

flat(input);


console.log(temparr);