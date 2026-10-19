// Buy And Sell Stock   
// Brute Force Approach
let arr = [7,1,5,3,6,4]; // max profit = 5 
// (buy at 1 and sell at 6)
let maxProfit = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1;j < arr.length;j++){
        if(arr[j] > arr[i]){
            let profit = arr[j] - arr[i];
            maxProfit = Math.max(profit,maxProfit);
        }
    }
}
console.log(maxProfit);
// TIME COMPLEXITY = O(n^2)
// SPACE COMPLEXITY = O(1)

// Optimal Approach
let arr1 = [7,1,5,3,6,4]; // max profit = 5
let minPrice = arr1[0];
let maxProfit1 = 0;
for(let i = 1;i < arr1.length;i++){
    if(arr1[i] < minPrice){ // update the minPrice 
    // if current price is less than minPrice
        minPrice = arr1[i];
    }
    else{
        let profit = arr1[i] - minPrice; // calculate profit
        maxProfit1 = Math.max(profit,maxProfit1); // update maxProfit if current
        //  profit is greater than maxProfit
    }
    }
console.log(maxProfit1);
// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(1)