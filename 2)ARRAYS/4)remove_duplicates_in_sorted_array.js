// Remove Duplicates From Sorted Array
// Brute Force Approach
let arr = [1,1,2,2,2,3,3];
let uniqueArr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[i + 1]){
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr);
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)

// Optimal Approach
let array = [1,1,2,2,2,3,3];
let res = [...new Set(array)] // The Spread Operator Converts The Set Object To An Array
console.log(res);
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)

// For Objects In An Array
let objArray = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},  
    {id: 1, name: 'Alice'}
];
let map = new Map();
for(let i = 0;i < objArray.length;i++){
    if(!map.has(objArray[i].id)){ // If The Map Does Not Contain The Key
        map.set(objArray[i].id, objArray[i]);
    }
}
console.log(Array.from(map.values())); // Convert The Map Values Into An Array

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)