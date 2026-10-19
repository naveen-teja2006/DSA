// Merger Two Sorted Arrays Without Using Extra Space
// This is an optimal solution used in the interviews 
// It is based on the shell sort
let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
let m = arr1.length;
let n = arr2.length;
let totalLen = m + n;
let gap = Math.ceil((m + n) / 2);
while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < totalLen) {
        // arr1 and arr2 
        if (left < n && right >= n) {
            if (arr1[left] > arr2[right]) {
                [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            }
        }
        // arr2 and arr2
        else if (left >= n) {
            if (arr2[left] > arr2[right]) {
                [arr2[left], arr2[right]] = [arr2[right], arr2[left]];
            }
        }
        // arr1 and arr1
        else {
            if (arr1[left] > arr2[left]) {
                [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
            }
        }
        left++;
        right++;
    }
    if (gap == 1) {
        break;
    }
    gap = Math.ceil(gap / 2);
}