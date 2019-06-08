//Math


var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === parseInt(x.toString().split('').reverse().join(''))
};

var isPalindrome = function(x) {
    if(x < 0 || x > 2147483647){
        return false;
     }
     let copyX = x;
     let num = 0;
     while(x){
         num = num * 10 + x % 10;
         x = Math.floor(x / 10);
     }
     return copyX == num;
};

var reverse = function(x){
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    let res = 0;
    while(x){
      res = res * 10 +  x % 10;
      x = parseInt(x / 10);
      if(res < min || res > max) return 0;
    }
    return res;
  }


var reverse = function(x){
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    let res = 0;
    while(x){
      res = res * 10 +  x % 10;
      x = parseInt(x / 10);
      if(res < min || res > max) return 0;
    }
    return res;
  }

  var reverse = function(x) {
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    var res = 0;
    while (x) {
        res = res * 10 + x % 10;
        x = parseInt(x / 10);
       if(res < min || res > max) return 0;
    }
   
    return result;
  }
  
  //Array
  var reverse = function(x) {
    let arr = String(x).split("");
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    if(x < 0){ 
      arr.shift();
      arr.push("-");
    }
    let res = arr.reverse();
    for(let i = 0; i < res.length; i ++){
      if(res[i] !== '0'){
        res = res.slice(i);
        break;
      }
    }
    res = Number(res.join(""));
    if(res >= min && res <= max){
      return res;
    }
    else return 0;
  };

