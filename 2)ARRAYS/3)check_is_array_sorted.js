// checking The Array Sorted Or Not 
// Best Approach
let arr = [3,3,1,2,2,1,4];
let isSorted = true;
for(let i = 1;i < arr.length;i++){
    if(arr[i] < arr[i - 1]){
        isSorted = false;
        break;
    }
}
console.log(isSorted);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)

// Alternative Approach
let array = [3,3,1,2,2,1,4];
let isSortedArray = array.every((arrEle,i) =>{
    return i === 0 || arrEle >= array[i - 1];
    // Here The i === 0 Means If It Is A First Element We Should Not Compare
    // Because No Previous Element So Start From The Index One
});
console.log(isSortedArray)
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1).