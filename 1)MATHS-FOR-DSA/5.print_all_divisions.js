// Print All Divisions Of A Number
// Best Approach
/* 1 * 36 = 36 
   2 * 18 = 36 
   3 * 12 = 36 
   4 * 9 = 36  
   6 * 6 = 36
   9 * 4 = 36
   12 * 3 = 36
   18 * 2 = 36
   36 * 1 = 36
*/
let number = 36;
let arr = [];
// Every Largest Number Again Paired With Smallest Number 
for(let i = 1;i <= Math.sqrt(number);i++){
    if(number % i == 0){
        console.log(i);
        if((number / i) !== i){ // If Number Is duplicate Then Log It One Time
            console.log(number / i);
        }
    }
}
// TIME COMPLEXITY : O(√n)
// SPACE COMPLEXITY : O(1)