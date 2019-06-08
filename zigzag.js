

var convert = function(s, numRows) {
    if (numRows < 2) {
      return s;
    }
    var matrix = [];
    for (var i = 0; i < numRows; i++) {
        matrix.push([]);
    }
    var k = 0;
    var i = 0;
    var res = '';
    while (k < s.length) {
        while(i < matrix.length && k < s.length) {
            matrix[i].push(s[k]);
            // down
            i++;
            k++;
        }
        i = i-2;
        while (i >= 0 && k < s.length) {
            matrix[i].push(s[k])
            // up
            i--;
            k++;
        }
        i = i+2;
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var k = 0; k < matrix[i].length; k++) {
            res += matrix[i][k];
        }
    }
    return res;
};

var convert = function(s, numRows) {
    var len = s.length;
    var matrix = [];

    var matrix = [];
    for (var i = 0; i < numRows; i++) {
        matrix.push([]);
    }

    var i = 0, res='';
    while(i < len) {
        for(var idx = 0; idx < numRows && i < len; idx++) { // down
            matrix[idx].push(s[i]);// add it to the matrix 
            i++; // then increase 
        }
        for(var idx = numRows - 2; idx >=1 && i< len; idx--){ //up
            matrix[idx].push(s[i++]);
        }
    }

    for(var i = 0; i < matrix.length; i++){ 
        for(var j=0; j< matrix[i].length; j++){
                res += matrix[i][j];
        }
    }

    return res;


}
