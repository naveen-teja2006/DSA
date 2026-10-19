/* Count Digits In A Number */
// ->1st Approach
let num = 1234; 
let count = 0; // For Counting The Number Of Iterations(Number Of Digits)
while(num > 0){
  count = count + 1; // Incrementing
  num = Math.floor(num / 10); // Removing Last Digit In The Number
}
console.log(count);
/* Time Complexity : O(n) -> While Loop
   Space Complexity : O(1) -> No Extra Space 
*/
//---------------------------------------------------------------------------//
// ->Another Approach Logarthmic
let number = 1234;
let countNumbers = Math.floor(Math.log10(number)) + 1;
console.log(countNumbers);
/* Logarithm Is Like log10(1234) => Power Of 10 => 10 ^ 3.091 + 1 = 4.091
   1 is 10 ^ 0 + 1
   10 is 10 ^ 1 + 1
   100 is 10 ^ 2 + 1
*/
/* Time Complexity : O(log10(n)) -> Direct Logarthmic Formula
   Space Complexity : O(1) -> No Extra Space 
*/