// Largest subarray with sum K
class Solution {
	maxSubarraySum(arr, k) {
		let left = 0;
		let max_sum = -Infinity;
		let prefix_sum = 0;
		for (let right = 0; right < arr.length; right++) {
			prefix_sum += arr[right];
			if(right - left + 1 == k){
			    max_sum = Math.max(max_sum,prefix_sum);
			    prefix_sum -= arr[left];
			    left++;
			}
		}
		return max_sum;
	}
}
