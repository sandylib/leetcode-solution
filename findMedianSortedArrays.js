// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = [].concat(nums1,nums2), mid = nums.length/2.0;

//     nums.sort(function(a,b){return a-b})

//     let right = Math.floor(mid), result;

//     if(mid === right){

//         return (nums[right-1]+nums[right])/2.0
//     }else{

//         return nums[right]
//     }
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length;
    let res = [];
    for(var i = 0; i <= len / 2;){
        if(nums1[0]!==undefined && nums2[0]!==undefined){
            if(nums1[0] >= nums2[0]) res.push(nums2.shift())
            else res.push(nums1.shift())
        }else if(nums1[0]!==undefined){
            res.push(nums1.shift())
        }else if(nums2[0]!==undefined){
            res.push(nums2.shift())
        }
        i++;
    }
    const median = len % 2 === 1 ? res.pop() : (res.pop() + res.pop())/2;
    return median.toFixed(1); 
};

findMedianSortedArrays([1,2], [3,4]);