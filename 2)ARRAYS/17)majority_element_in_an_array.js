// Majority Element In An Array
// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// Brute Force Approach
let arr = [2,2,3,3,1,2,2];
let n = arr.length;
let majority = null;
for(let i = 0; i < arr.length;i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count > Math.floor(n / 2)){
        majority = arr[i];
        break;
    }
}
console.log(majority);
// TIME COMPLEXITY : O(n^2)
// SPACE COMPLEXITY : O(1)

// Optimal Approach Boyer-Moore Voting Algorithm
let array = [2,2,3,3,1,2,2];
let count = 0;
let majority_ele = null;
for(let i = 0; i < array.length;i++){
    if(count === 0){ // If It Cancelled Out Then We Need To Update Majority Element
                    // Because We Need To Find The Element That Occurs More Than n/2 Times
                    // If The Element Appear 3 Times And Cancelled By 3 Times Then We Need To 
                    // Update Majority Element To Find The Next Majority Element
        majority_ele = array[i];
    }
    if(array[i] === majority_ele){
        count++;
    }
    else{
        count--;
    }
}
console.log(majority_ele);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)