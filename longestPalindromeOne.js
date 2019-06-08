var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let minStart = 0, maxLen = 1;
    let curIndex = 0;

    while (curIndex < s.length) {

      if (s.length - curIndex < maxLen / 2) break;
      let j = k = curIndex;

      while (k < s.length - 1 && s[k+1] === s[k]) ++k; // Skip duplicate characters.
      curIndex = k + 1;
      while (k < s.length - 1 && j > 0 && s[k+1] === s[j-1]) {
        ++k;
        --j;
      }

      let newLen = k - j + 1;
      if (newLen > maxLen) {
        minStart = j;
        maxLen = newLen;
      }
    }
    return s.substr(minStart, maxLen);
  };


// longestPalindrome('"babad"')

// O(n^2)
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  var start = 0, end = 0;
  for (var i = 0; i < s.length; i++) {
      var len1 = expandAroundCenter(s, i, i);
      var len2 = expandAroundCenter(s, i, i + 1);
      var len = Math.max(len1, len2);
      if (len > end - start) {
          start = i - parseInt((len - 1) / 2);
          end = i + parseInt(len / 2);
      }
  }
  return s.substring(start, end + 1);
}

function expandAroundCenter(s,  left, right) {
  var L = left, R = right;
  while (L >= 0 && R < s.length && s[L] == s[R]) {
      L--;
      R++;
  }
  return R - L - 1;
}