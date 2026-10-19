/* Number Palindrome */
// ->Best Approach
/* Negative Numbers Are Not Considered As The Palindromes Because The Sign Breaks
The Symmetry. */
let num = 151;
let temp = num;
let reversedNumber = 0;
while(num > 0){
    let digit = num % 10; // Extracting The Digit From The Number
    reversedNumber = reversedNumber * 10 + digit; 
    // 1234 => 4000 + 300 + 20 + 1 => 4 * 1000 + 3 * 100 + 2 * 10 + 1 * 0
    num = Math.floor(num / 10);
}
if(reversedNumber == temp){
    console.log("It Is A Palindrome")
}
else{
    console.log("It Is Not A Palindrome");
}
/*TIME COMPLEXITY : O(log10(n)) Because It Is Divided By 10 
For Every Iteration.
SPACE COMPLEXITY : O(1) temp,reversedNumber,num takes constant space.
*/