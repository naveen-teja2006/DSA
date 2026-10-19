// Two Sum Solution 
// Brute Force Approach
let arr = [2,6,5,8,11];
let target = 14;
for(let i = 0;i <arr.length;i++){
    for(let j = i + 1;j < arr.length;j++){
        if(arr[i] + arr[j] == target){
            console.log([i,j]);
        }
    }
}
// TIME COMPLEXITY : O(n ^ 2)
// SPACE COMPLEXITY : O(1)

// Better Approach Hashing And Complement
let array = [2,6,5,8,11];
let targetEle = 14;
let map = new Map();
for(let currentIndex = 0;currentIndex < array.length;currentIndex++){
     let complement = targetEle - array[currentIndex];
     if(!map.has(complement)){
        map.set(array[currentIndex],currentIndex);
     }
     else{
        console.log([map.get(complement),currentIndex]);
     }
}
// TIME COMPLEXITY : O(nlogn) 
// SPACE COMPLEXITY : O(n) It Is For Map

// Optimal Solution Two Pointer
// In This We Sort The Array And Move The Pointers To Left And Right
// Then TIME COMPLEXITY : O(n) + O(nlogn)
// And SPACE COMPLEXITY : O(1)