// Next Permutation
// 1.Find The Break Point 
// 2.And I Should Greater Than The 0
// 3.Swap With Next Greater Near Element 
// 4.Reverse Remaining Portion
// 5.Print The Array
// Optimised Solution
let arr = [2, 1, 5, 4, 3, 0, 0];
let length = arr.length;
let i;
for (i = length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) { // Come From Right So That You Understand 
        break;                  // Where The BreakPoint Is Here [5,4,3,0,0]
    }
}
if (i >= 0) {
    for (let j = length - 1; j > i; j--) { // For Knowing The Swap Element 
        if (arr[j] > arr[i]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            break;
        }
    }
}
reverseArray(arr, i + 1, length - 1);
function reverseArray(nums, start, end) { // For Reversing The Remaining Point
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
console.log(arr);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)