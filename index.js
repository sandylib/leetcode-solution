var lengthOfLongestSubstring = function(s) {
    var start = 0, maxLen = 0;
    var map = new Map();
  
    for(var i = 0; i < s.length; i++) {
        var ch = s[i];
        debugger;
        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
        debugger;
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }
  
    return maxLen;
  };


  lengthOfLongestSubstring('abcdabc')