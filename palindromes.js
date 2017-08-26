
function palindrome(str) {
  var newStr = str.replace(/[\W_]/g, '');
  newStr = newStr.toLowerCase();
  var newStrTwo = newStr.split('').reverse().join('');
  if (newStr === newStrTwo) {
      return true;
  } else {
      return false;
  }
}



palindrome("eye");