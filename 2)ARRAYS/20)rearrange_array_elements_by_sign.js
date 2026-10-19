// Rearrange array elements by sign
// Given an array of positive and negative numbers, 
// arrange them such that all negative integers 
// appear before all the positive integers in the array.
// The order of appearance should be maintained.
// Better Approach: We can use the 
// partition process of the quick sort 
// algorithm to rearrange the elements in-place.
let arr = [3,-2,1,-5,2,-4]; // output = [-2,-5,-4,3,1,2]
let rearrangedArr = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        rearrangedArr.push(arr[i]);
    }
}
for(let i = 0;i < arr.length;i++){
    if(arr[i] >= 0){
        rearrangedArr.push(arr[i]);
    }
}
console.log(rearrangedArr);
// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(n)

// Optimal Approach Quick Sort Partition Process
// let arr1 = [3,-2,1,-5,2,-4]; // output = [-2,-5,-4,3,1,2]
// let low = 0;
// let high = arr1.length - 1;
// while(low <= high){

// }