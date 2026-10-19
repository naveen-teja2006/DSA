// MAXIMUM PRODUCT OF THE SUBARRAY
// WE USE PREFIX AND SUFFIX APPROACH WHERE THE BEFORE NEGATIVE AND ZEROES PREFIX
// AFTER NEGATIVE AND ZEROES ARE SUFFIX 
let arr = [2, 3, 4, -2, 4];
let n = arr.length;
let maxProduct = 1;
let prefix = 1;
let suffix = 1;
for (let i = 0; i < arr.length; i++) {
    // IF PREFIX IS 0 THEN START WITH NEW SUBARRAY FROM FRONT
    if (prefix == 0) {
        prefix = 1;
    }
    // IF SUFFIX IS ZERO START WITH NEW SUBARRAY FROM BACK
    if (suffix == 0) {
        suffix = 1;
    }
    prefix = prefix * arr[i]; // PREFIX PRODUCT
    suffix = suffix * arr[n - i - 1]; // SUFFIX PRODUCT
    maxProduct = Math.max(Math.max(prefix, suffix), maxProduct); // MAXPRODUCT AMONG ALL 
}
console.log(maxProduct);