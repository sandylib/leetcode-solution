/* 
*

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var list = [];
    if (nums == null || nums.length < 4) {
        return list;
    }
    nums.sort((a, b) => a - b);

    for(var i = 0;i< nums.length - 3;i++){
        if(i>0 && nums[i] == nums[i-1]) continue;

        for(var j = i+1;j< nums.length - 2;j++){

            if(j > i+1 && nums[j] == nums[j-1]) continue;

            var twoSumTarget = target - nums[i] - nums[j];
            //The following 3 lines of code to calculate the min and max of twoSum
            var minTwoSum = nums[j+1] + nums[j+2];

            var maxTwoSum = nums[nums.length - 1] + nums[nums.length - 2];

            if(twoSumTarget < minTwoSum || twoSumTarget > maxTwoSum) continue;

            var l = j+1, r = nums.length-1;
            while(l < r) {
                var twoSum = nums[l] + nums[r];
                if(twoSum == twoSumTarget) {
                    var quadruplets = [nums[i], nums[j], nums[l], nums[r]];
                    list.push(quadruplets);
                    l++;
                    r--;
                    while(l < r && nums[l] == nums[l-1]) l++; // avoid duplicate
                    while(l < r && nums[r] == nums[r+1]) r--; // avoid duplicate
                   
                } else if (twoSum < twoSumTarget) {
                    l++;
                } else {
                    r--;
                }

            }
        }
    }
    return list;
    
};

