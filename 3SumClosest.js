
/**
 * 
 * Qeustion
 * 
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    var ans = [];
    if (nums == null || nums.length == 0) {
        return ans;
    }
    nums.sort((a, b) => a - b);
    var closestSum = nums[0] + nums[1] + nums[2];
    var minDiff = Math.abs(target - closestSum);
    for (var i = 0; i < nums.length-2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) { // if this note value is the same value of previous note than don't need to compare
            continue;
        }
        var l = i + 1;
        var r = nums.length - 1;
        
        while (l !== r) {
            var sum = nums[i] + nums[l] + nums[r];
            if (sum == target) {
                return target;
            } 
            
            if (Math.abs(target-sum) < minDiff) {
                closestSum = sum;
                minDiff = Math.abs(target-sum);
            }
            
            if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    return closestSum;
    
};