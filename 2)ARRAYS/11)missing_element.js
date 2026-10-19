// Missing Element In An Array
// OPtimised Approach: Using the formula for the sum of the first n natural numbers
let arr = [1, 2, 3, 5];
let n = arr.length + 1; // Total number of elements including the missing one
let sumOfTheArray = n * (n + 1) / 2;
let sumOfElementsInTheArray = arr.reduce((acc,curr)=>acc + curr,0);
let missingElement = sumOfTheArray - sumOfElementsInTheArray;
console.log(missingElement);
// TIME COMPLEXITY: O(n) due to the reduce function
// SPACE COMPLEXITY: O(1) as we are using only a constant amount of extra space 

// By Using XOR Operator
let array = [1,2,3,5,6];
let n1 = arr.length + 1; // Total number of elements including the missing one
let xor1 = 0;   // XOR cancels out the same numbers.so we will make this for missing element
let xor2 = 0;
for(let i = 0;i < n1;i++){
    xor1 ^= (i + 1);
}
for(let j = 0;j < arr.length;j++){
    xor2 ^= arr[j];
}
let missingEle  = xor1 ^ xor2;
console.log(missingEle);
// TIME COMPLEXITY: O(n) due to the two loops
// SPACE COMPLEXITY: O(1) as we are using only a constant amount of extra space;