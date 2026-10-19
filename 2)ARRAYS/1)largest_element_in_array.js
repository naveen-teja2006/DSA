// Largest Element In Array
// Brute Approach
let arr = [3,2,1,5,4,6];
arr.sort(); // Sorting is O(n^2) 
console.log(arr[arr.length - 1]);
// TIME COMPLEXITY : 0(n^2)
// SPACE COMPLEXITY : O(1)

// Optimal Approach
let array = [3,2,1,5,4,6];
let max_ele = -Infinity; // Here It Works For Negative Numbers Also
for(let i = 0;i <= arr.length;i++){
   if(max_ele < arr[i]){
      max_ele = arr[i];
   }
}
console.log(max_ele);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)