// Greatest Common Divisor
let n1 = 9;
let n2 = 12;
let minimumNumber= Math.min(n1,n2);
for(let i = minimumNumber;i >= 1;i--){
    if(n1 % i == 0 && n2 % i == 0){
        console.log("GCD IS : " + i);
        break;
    }
}
// TIME COMPLEXITY : O(minimum(n1,n2))
// SPACE COMPLEXITY : O(1)