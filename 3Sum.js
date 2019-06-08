/*  Quesiotn1
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/


function threeSum(nums) {

        var ans = [];
        if (nums == null || nums.length == 0) {
            return ans;
        }
        nums.sort((a, b) => a - b);
        for (var i = 0; i < nums.length - 2; i++) { // since we need 3 items, so just loop through upto nums.length -2
            if (i > 0 && nums[i] == nums[i - 1]) { // remove duplicate
                continue;
            }
            var j = i + 1, k = nums.length - 1;
            while (j < k) { // scecond loop start here.
                var sum = nums[j] + nums[k];
                if (sum + nums[i] == 0) {
                    var triplet = [];
                    triplet.push(nums[i]);
                    triplet.push(nums[j]);
                    triplet.push(nums[k]);
                    ans.push(triplet);
                    j++; // if found then move left pointer and right pointer
                    k--;
                    while (j < k && nums[j] == nums[j - 1]) { // avoid duplicate search: after the pointer moved then to check current positon number is the same with previous found position, then move to the pointer to the right again
                        j++;
                    }
                    while (j < k && nums[k] == nums[k + 1]) { //same here avoid duplicate search: 
                        k--;
                    }
                } else if (sum + nums[i] < 0){ // if not found, and the sum less than 0, that means current add too smaller so move the left pointer to closer the right(becasuse the number of array is asc order)
                    j++;
                } else { // otherwise it means the sum is big than 0, that means the current add too bigger, so move the right pointer to the left.
                    k--;
                }
            }
        }
        return ans;
        
    }

