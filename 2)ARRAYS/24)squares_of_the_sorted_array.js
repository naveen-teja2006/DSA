// Better Solution with O(nlogn) time complexity and O(1) space complexity
let arr = [-4,-1,0,3,10];
for(let i = 0;i < arr.length;i++){
    arr[i] = arr[i] * arr[i];
}
console.log(arr.sort((a,b) => a - b));
// Optimized solution with O(n) time complexity and O(n) space complexity
let nums = [-4,-1,0,3,10]; // [16,1,0,9,100]
let left = 0;
let right = nums.length - 1;
let res = new Array(nums.length);
for(let i = nums.length - 1;i >= 0;i--){
    if(Math.abs(nums[left]) > Math.abs(nums[right])){
        res[i] = nums[left] * nums[left];
        left++;
    }
    else{
        res[i] = nums[right] * nums[right];
        right--;
    }
}
console.log(res);