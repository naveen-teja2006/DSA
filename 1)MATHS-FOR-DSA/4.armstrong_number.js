/* Armstrong Number */
// Best Approach 
/* If Sum Of The Length Of The Number Of The Number Is Again That 
Number Then It Is ArmStrong Number */
let num = 1532;
let sum = 0;
let temp = num;
let numOfDigits = 0;
// step-1: Count The Number Of Digits In The Number
//                 (or)
//           String(temp).length
while(temp > 0){
    temp = Math.floor(temp / 10);
    numOfDigits++;
}
// Step-2:Sum Of The Digits
temp = num;
while(temp > 0){
    let digit = temp % 10; // Extracting The Digit From The Number
    sum += Math.pow(digit,numOfDigits); //Summation Of Cubes Of Each Number
    temp = Math.floor(temp / 10); // Removing The Digit From The Number
}
if(sum == num){
    console.log(`${num} Is An Armstrong Number`);
}
console.log(sum);
/*TIME COMPLEXITY : O(2*log10(n)) => O(log10(n))
SPACE COMPLEXITY : O(1)
*/