// Sort An Array
// Better Approach Two Pointer
let arr = [0,1,2,0,1,2,1,2,0,0,0,1];
let left = 0;
let right = arr.length - 1;
let i = 0;
while(i <= right){
    if(arr[i] == 0){
        [arr[i],arr[left]] = [arr[left],arr[i]];
        left++;
        i++;
    }
    else if(arr[i] == 2){
        [arr[i],arr[right]] = [arr[right],arr[i]];
        right--;
    }
    else{
        i++; // Increment The Variable
    }
}
console.log(arr);