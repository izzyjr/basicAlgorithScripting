
function confirmEnding(str, target) {
var tar = target.split('');
var indexEnd = tar.length;
var last = str.substr(-indexEnd);
if (last === target){
        console.log(true);
    }else {
        console.log(false);
    }


}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");


// function confirmEnding(str, target) {
//     var array = str.split('');
//     var last = array[array.length - 1];
//     var arr = target.split('');
//     var tar = arr[arr.length - 1];
//     if (last === tar){
//         return true;
//     }else {
//         return false;
//     }
    
    
  
// }



confirmEnding("Bastian", "n");