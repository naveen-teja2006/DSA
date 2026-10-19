// Left Rotate an Array by d Places
// Best Approach: Using Slice Method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d = 4; // Number of Rotations
let k = d % arr.length; // If d > arr.length Then It Is Wrap Around Condition
let rotatedArr = arr.slice(k).concat(arr.slice(0,k));
console.log(rotatedArr); 
// TIME COMPLEXITY: O(n)    
// SPACE COMPLEXITY: O(n)

// Optimal Approach: Using Reversal Algorithm Means Reverse The Array In Parts
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rotations = 4; // Number of Rotations
let start = 0;
let end = array.length - 1;
let extraRotations = rotations % arr.length; // If extraRotations > arr.length Then It Is Wrap Around Condition
function reverse(arr, start, end) {
    while(start < end){
        let temp = array[start]; // Storing The Value In Temporary Variable
        array[start]  = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}
function leftRotate(arr,rotations){
    reverse(arr,0,extraRotations - 1);
    reverse(arr,extraRotations,arr.length - 1);
    reverse(arr,0,arr.length - 1);
}
reverse(array,0,extraRotations - 1);
leftRotate(array,rotations);
console.log(array);
// TIME COMPLEXITY : O(n)
//SPACE COMPLEXITY : O(1)
