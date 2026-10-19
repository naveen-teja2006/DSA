// Maximum Consecutive Ones In An Array
// Optimized Solution
let arr = [1,1,1,0,1,1,0,1];
let maximumConsecutiveOnes = (arr) => {
    let count = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === 1){
            count++;
        }
        else{
            break;
        }
    }
    return count;
}
console.log(maximumConsecutiveOnes(arr));  
// TIME COMPLEXITY: O(n) where n is the length of the array
// SPACE COMPLEXITY: O(1) as we are using only a constant amount of space to store the count variable.