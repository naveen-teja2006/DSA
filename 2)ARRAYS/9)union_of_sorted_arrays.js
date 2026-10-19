//Union Of Sorted Arrays
// Brute Approach
let array1 = [1, 2, 3, 4, 4, 5];
let array2 = [1, 3, 4, 4, 5, 6];
let unionArray = [];
for(let i = 0; i < array1.length; i++){
    if(!unionArray.includes(array1[i])){
        unionArray.push(array1[i]);
    }
}
for(let j = 0; j < array2.length; j++){
    if(!unionArray.includes(array2[j])){
        unionArray.push(array2[j]);
    }
}
console.log(unionArray);
// TIME COMPLEXITY: O(n*m) where n and m are the lengths of the two arrays.
// SPACE COMPLEXITY: O(n+m) in the worst case, if all elements are unique.

// Optimal Approach
let arr1 = [1, 2, 3, 4, 4, 5];
let arr2 = [1, 3, 4, 4, 5, 6]; 
let union = [new Set([...arr1,...arr2])];
console.log(union);
// TIME COMPLEXITY: O(n+m) where n and m are the lengths of the two arrays.
// SPACE COMPLEXITY: O(n+m) in the worst case, if all elements are unique.