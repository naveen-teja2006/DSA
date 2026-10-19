/* Reverse A Number */
// ->1st Approach
let num = 12345;
let reversedNumber = 0;
while(num > 0){
    let digit = num % 10; // Extracting The Digit From The Number
    reversedNumber = reversedNumber * 10 + digit; 
    // 1234 => 4000 + 300 + 20 + 1 => 4 * 1000 + 3 * 100 + 2 * 10 + 1 * 0
    num = Math.floor(num / 10);
}
console.log(reversedNumber);