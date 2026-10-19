// Intersection Of Three Arrays 
var intersection = function (nums) {
    let res = [];
    let map = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (map.has(nums[i][j])) {
                map.get(nums[i][j]);
                if (map.get(nums[i][j]) == nums.length) {
                    res.push(nums[i][j]);
                }
            }
            else {
                map.set(nums[i][j], (map.get(nums[i][j]) || 0) + 1);
            }
        }
        return res;
    };
};