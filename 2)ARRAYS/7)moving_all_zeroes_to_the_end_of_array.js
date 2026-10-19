// Moving All Zeroes To The End Of An Array
// Brute Approach Or Better Approach
let array =  [0,1,0,5,0,4];
let temp = [];
for(let ele = 0;ele < array.length;ele++){
    if(array[ele] !== 0){ // This Is For Inserting The Non-Zero Elements Into Temp Variable
      temp.push(array[ele]); // [1,5,4]
    }
}
for(let j = 0;j < temp.length;j++){ // This Is For Inserting The Temp Elements Into Original Array 
    array[j] = temp[j];
}
for(let k = temp.length;k < array.length;k++){ // This Is For Inserting The Zeroes At The End Of An Array
    array[k] = 0;
}
console.log(array); // [1,5,4,0,0,0]
// Optimal Approach
let arr = [0,1,0,5,0,4];
let index = 0; // Pointer To Track The Indexes Or Positions
for(let i = 0;i < arr.length;i++){
    if(arr[i] !== 0){
        arr[index++] = arr[i];
    }
}
while(index < arr.length){
    arr[index++] = 0;
}
console.log(arr);
// TIME COMPLEXITY : O(n + n) = O(2n) => O(n) // Because Constants Are Ignored In Time Complexity
// SPACE COMPLEXITY : O(1)