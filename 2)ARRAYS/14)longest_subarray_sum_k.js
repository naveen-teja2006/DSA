// Longest SubArray With Sum K
// Brute Force Approach
let arr = [1,2,3,1,1,1,1,4,2,3];
let k = 3;
let maxLen = 0;
for(let i=0;i<arr.length;i++){
    let sum = 0; // Resets Sum Variable For Each Iteration
    for(let j=i;j<arr.length;j++){
            sum  += arr[j]        // We Can Also do It By arr.slice(i,j+1).reduce((a,b)=> a + b,0);
            if(sum == k){
                maxLen = Math.max(maxLen,j - i + 1);
            }
        }
    }
console.log(maxLen);
// TIME COMPLEXITY : O(n ^ 2) It Is Better Than Using Slice : O(n) Reduce : O(n)
// SPACE COMPLEXITY : O(1)

// Better Approach
// Prefix Sum And Hashmap
let array = [1,2,3,1,1,1,1,4,2,3];
let map = new Map();
let currentSum = 0;
let maxLength = 0;
let d = 3;
map.set(0,-1); // If Map Starts At Index -1
for(let i = 0;i < arr.length;i++){
    currentSum += arr[i];
    if(!map.has(currentSum)){
        map.set(currentSum,i);
    }
    if(map.has(currentSum - d)){
        maxLength = Math.max(maxLength,i - map.get(currentSum - d));
    }
}
console.log(maxLength);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)