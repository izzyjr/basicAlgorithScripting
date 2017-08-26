
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for(var i = 0; i < arr.length; i+= size){
    var newItem = arr.slice(i, size + i);
    newArray.push(newItem);
  }
    console.log(newArray);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



 