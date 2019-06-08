var maxArea = function(heightList) {
    let largestArea = 0;
    
    let leftIndex = 0;
    let rightIndex = heightList.length - 1;
    
    while (leftIndex < rightIndex) {
        const leftValue = heightList[leftIndex];
        const rightValue = heightList[rightIndex];
        const currentArea = (rightIndex - leftIndex) * Math.min(leftValue, rightValue);
        
        if (currentArea > largestArea) {
            largestArea = currentArea;
        }
        
        if (leftValue > rightValue) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }

    return largestArea;
};

var maxArea = function(height) {
    let i = 0
    let j = height.length-1
    let maxArea = 0
    while (i !== j){
        let area 
        if (height[i] <= height[j]){
            area = height[i] * (j - i)
            i++
        }
        else if(height[j] < height[i]){
            area = height[j] * (j - i)
            j--
        }
        if (area > maxArea){
            maxArea = area
        }
    }
    return maxArea
};



var trap = function(height) {
    if (height.length <= 0) return 0

    let traps = 0;
    let left = 0;
    let right = height.length - 1;
    let maxTrapHeight = 0;
	
	// maxTrapHeight will be the value that will hold the maximum value
	// you can fill a gap to.
	
	// We use two pointers one left and one right
	// You have found a gap if one of the pointers is less than the maximum trap height
	
    // ignore all empty rain drops until you find a solid block (value >= 1)
    if (height[left] === 0) {
        while (height[left] === 0 && left < height.length) {
            left++;
        }
    }

    if (height[right] === 0) {
         while (height[right] === 0 && right >= 0) {
            right--
        }
    }
    
	// Make sure the pointers never cross
    while(left < right) {
        if (height[left] < maxTrapHeight || height[right] < maxTrapHeight) {
            traps +=  (maxTrapHeight - Math.min(height[left], height[right]));
        }
        // compare the minimum of the two blocks to the maximum trap height
		// You cannot compare to the maximum because
		// you do not want any overflow

        const minHeight = Math.min(height[left], height[right]);
        maxTrapHeight = Math.max(maxTrapHeight, minHeight);
        
		// move the pointers according to the smallest value
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--
        }
    }
    
    return traps;
};

var trap = function(height) {
    let left = 0;
    let right = height.length-1;
    let leftMax = 0;
    let rightMax = 0;
    let ans = 0;
    while (left < right) {
        leftMax = Math.max(height[left], leftMax);
        if (leftMax > height[left]) {
            ans+= (leftMax - height[left]);
        }
        rightMax = Math.max(height[right], rightMax);
        if (rightMax > height[right]) {
            ans += (rightMax - height[right]);
        }
        height[left] < height[right] ? left++ : right--;
    }
    return ans;
};