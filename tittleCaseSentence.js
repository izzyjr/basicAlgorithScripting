
function titleCase(str) {
 var array = str.split(' ');
 for (var i = 0; i < array.length; i++){
     array[i].toUpperCase();
 }
 var newStr = array.join(' ');
 console.log(newStr);
}

titleCase("I'm a little tea pot");


