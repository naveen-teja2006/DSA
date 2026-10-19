// Brute Force Solution
class Solution {
	findPages(arr, k) {
		if (k > arr.length) {
			return - 1; // Edge Case
		}
		//
		let low = Math.max(...arr);
		let high = arr.reduce((acc, ele) => acc + ele, 0);
		for (let pages = low; pages <= high; pages++) {
			let countStudents = allocate(arr, pages);
			if (countStudents <= k) { // Feasibility Check
				return pages;
			}
		}
		// Helper Function To Allocate Pages
		function allocate(arr, pages) {
			let pagesStudent = 0;
			let student = 1;
			for (let i = 0; i < arr.length; i++) {
				if (pagesStudent + arr[i] <= pages) {
					pagesStudent += arr[i];
				}
				else {
					student++;
					pagesStudent = arr[i];
				}
			}
			return student;
		}
	}
	// TIME COMPLEXITY : O(n * s)
	// SPACE COMPLEXITY : O(1)
}

// Optimal Solution By Binary Search On Answer Pattern
class Solution {
	findPages(arr, k) {
		if (k > arr.length) {
			return - 1; // Edge Case
		}
		let low = Math.max(...arr);
		let high = arr.reduce((acc, ele) => acc + ele, 0);
		let ans = -1;
		while (low <= high) {
			let mid = Math.floor((low + high) / 2);
			let countStudents = this.allocate(arr, mid);
			if (countStudents <= k) {
				ans = mid;
				high = mid - 1;
			}
			else {
				low = mid + 1;
			}
		}
		return ans;
	}
	// Helper Function
	allocate(arr, maxPages) {
		let pagesStudent = 0;
		let student = 1;
		for (let i = 0; i < arr.length; i++) {
			if (pagesStudent + arr[i] <= maxPages) {
				pagesStudent += arr[i];
			}
			else {
				student++;
				pagesStudent = arr[i];
			}
		}
		return student;
	}
}
// TIME COMPLEXITY : O(n * log s)
// SPACE COMPLEXITY : O(1)