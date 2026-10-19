// Prime Number 
// Best Approach
let num = 5;
let isPrime = true; // For Tracking The State / Condition
for(let i = 2;i * i <= num;i++){ // Square Root Is i * i <= num
    if(num % i == 0){
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "It Is A Prime Number" : "It Is Not A Prime Number");
// TIME COMPLEXITY : O(√n)
// SPACE COMPLEXITY : O(1);