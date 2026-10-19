// Number That Appear Once And Others Twice
// Brute Force Solution
let arr = [1,1,2,3,3,4,4];
for(let i = 0;i < arr.length;i++){
    let num = arr[i];
    let count = 0;
    for(let j = 0;j < arr.length;j++){ 
    // Here j starts from 0 because 
    // we want to count the occurrences of num in the entire array, including the current index i.
       if(num == arr[j]){
        count++;
       }
    }
    if(count == 1){
        console.log(num);
    }
}
// TIME COMPLEXITY : O(n ^ 2)
// SPACE COMPLEXITY : 1

// Optimised Solution With XOR
let array = [1,1,2,3,3,4,4];
let res = 0;
for(let i = 0;i < array.length;i++){
    res ^= array[i];
}
console.log(res);
// TIME COMPLEXITY : O(n) where n is the length of the array
// SPACE COMPLEXITY : O(1) as we are using only a constant amount of space to store the res variable.