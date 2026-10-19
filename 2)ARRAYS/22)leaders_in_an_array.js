// Leaders In An Array
// Brute Force Approach
let arr = [10,22,12,3,0,6];
let n = arr.length;
let res = [];
for(let i = 0;i < arr.length;i++){
    let isLeader = true;
    for(let j = i + 1;j < arr.length;j++){
        if(arr[j] > arr[i]){
            isLeader = false;
            break;
        }
    }
    if(isLeader){
        res.push(arr[i]);
    }
}
console.log(res);
// TIME COMPLEXITY : O(n ^ 2)
// SPACE COMPLEXITY : O(n)

// Optimised Solution 
let array = [10,22,12,3,0,6];
let resultArray = [];
let maxRight = -Infinity;
for(let i = array.length - 1;i >= 0;i--){
    if(array[i] > maxRight){
        resultArray.push(array[i]);
        maxRight = arr[i];   
}
}
resultArray.reverse();
console.log(resultArray);