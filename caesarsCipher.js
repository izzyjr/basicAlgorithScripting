
function rot13(str) {
 var array = str.split('');
 var arrayTwo = [];
 var arrayThree = [];
    for(var i = 0; i < array.length; i++){
      arrayTwo.push(array[i].charCodeAt(0));
  }
    for(var d = 0; d < arrayTwo.length; d++){
      if (arrayTwo[d] + 13 <= 90){
        if (arrayTwo[d] < 65){
          arrayThree.push(String.fromCharCode(arrayTwo[d]));
        }else{
        arrayThree.push(String.fromCharCode(arrayTwo[d] + 13));
        }
      }else{
        arrayThree.push(String.fromCharCode((arrayTwo[d] + 13) - 26));
      }
    }
    console.log(arrayThree.join(''));
}
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
  
  
 