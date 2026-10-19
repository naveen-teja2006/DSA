// Second Largest Element In Array
// Brute Force Approach
let arr = [3,1,5,6,2,4];
arr.sort();
console.log(arr[arr.length - 2]);
// TIME COMPLEXITY : O(n ^ 2)
// SPACE COMPLEXITY : O(1)

// Optimal Approach
let array = [1,2,4,5,11,11];
let largest = -Infinity; // Works For Negative Numbers Also
let secondLargest = -Infinity;
for(let i = 0;i <= arr.length;i++){
    if(array[i] > largest ){
        secondLargest = largest;
        largest = array[i];
    }
    else if(array[i] < largest && array[i] > secondLargest){ 
        // For Duplicates and Checking The Condition About SecondLargest Element Is Less Than Largest
        secondLargest = array[i];
    }
}
console.log(secondLargest);
// TIME COMPLEXITY : O(n) 
// SPACE COMPLEXITY : O(1)