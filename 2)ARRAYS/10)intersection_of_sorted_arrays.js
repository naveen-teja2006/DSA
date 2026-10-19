// Intersection Of Two Sorted Arrays
// Best Solution
let arr1 = [1,2,3,3,4,5];
let arr2 = [1,3,3,4,5,6];
let res = [];
let i = 0 , j = 0;
while(i < arr1.length && j < arr2.length){
    if(arr1[i] == arr2[j] && res.length == 0 || res[res.length - 1] != arr1[i]){ // For removing Duplicates
        res.push(arr1[i]);
        i++;
        j++;
    }
    else if(arr1[i] < arr2[j]){
        // Here we are moving the pointer of the smaller 
        // element because we want to find the common element in both arrays
        i++;
    }
    else{
        j++;
    }
}
console.log([...new Set(res)]);