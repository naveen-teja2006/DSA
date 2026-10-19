// Find N Unique Numbers With Sum Zero
let n = 6;
let index = 0;
let res = new Array(n);
let num = 1;
// Check The Array Having Even Or Odd Number Of Elements
if(n % 2 == 1){
    res[index] = 0;
    index++;
}
while(index < n){
    res[index] = num;
    index++;
    res[index] = -num;
    index++;
    num++;
 }
console.log(res);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)