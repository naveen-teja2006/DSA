// Left Rotate An Array By One Place
let arr = [1, 2, 3, 4, 5];
let firstElement = arr[0];
for(let i = 0;i < arr.length;i++){
    arr[i] = arr[i +1];
}
arr[arr.length - 1] = firstElement;
console.log(arr);
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)