/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringSolutionOne = function(s) {
    var n = s.length;
    var set = new Set();
    var j = 0;
   
    while (i < n && j < n) {
        // try to extend the range [i, j]
        if (!set.has(s[j])){
            set.add(s[j++]);
            ans =  Math.max(ans, j - i);
        }
        else {
            set.delete(s[i++]);
        }
    }
    return ans;
};






var lengthOfLongestSubstringSolutionTwo = function(s) {
    var n = s.length, ans = 0;
    var map = new Map(); // current index of character
    // try to extend the range [i, j]
    for (var j = 0, i = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j + 1);
    }
    return ans;
};

console.log(lengthOfLongestSubstringSolutionTwo("abcabcbb"));

