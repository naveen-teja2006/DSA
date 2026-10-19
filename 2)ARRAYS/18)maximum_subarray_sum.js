// Maximum Subarray Sum
// Better Approach 
let arr = [-2,-3,4,-1,-2,1,5,-3];
let maxSum = 0;
for(let i=0; i<arr.length; i++){
    let sum = 0;
    for(let j=i; j < arr.length; j++){
        sum += arr[j];
        maxSum = Math.max(maxSum,sum);
    }
}
console.log(maxSum);
// TIME COMPLEXITY: O(n^2)
// SPACE COMPLEXITY: O(1)

// Optimal Approach (Kadane's Algorithm)
for(let i = 0; i < array.length; i++){
    currentSum += array[i]; // For Adding All Elements
    // currentSum = Math.max(currentSum,array[i]); // For Adding Only Positive Elements
    if(currentSum > maxSum1){ // If Current Sum is Greater 
    // than Max Sum then Update Max Sum
        maxSum1 = currentSum;
    }   
    if(currentSum < 0){
        currentSum = 0;
    }
}
console.log(maxSum1);
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)