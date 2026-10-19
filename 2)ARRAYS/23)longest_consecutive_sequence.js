// Longest Consecutive Sequence
// Brute Force Approach
let arr = [102,4,100,1,101,3,2,1,1];
let longest = -Infinity;
for(let i = 0;i < arr.length;i++){
    let x = arr[i];
    let count = 1;
    while(arr.includes(x + 1)){
        x = x + 1;
        count++;
    }
    longest = Math.max(longest,count);
}
console.log(longest);
// TIME COMPLEXITY : O(n ^ 2)
// SAPCE COMPLEXITY :  O(n)

// Optimised Solution 
let array = [102,4,100,1,101,3,2,1,1];
let set = new Set(array); // [102,4,100,1,101,3,2]
let maxLength = 0;
for(let num of set){
    if(!set.has(num - 1)){ // This Means It Is The 
    // First Number And We Have To Check After This Number
        let current = num;
        let count = 1;
        while(set.has(current + 1)){
            current++;
            count++;
        }
        maxLength = Math.max(maxLength,count);
    }
}
console.log(maxLength);
// TIME COMPLEXITY : O(n)
// SAPCE COMPLEXITY :  O(n)