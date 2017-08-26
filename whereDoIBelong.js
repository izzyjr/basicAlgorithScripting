
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (a, b){
        return a - b;
    });    
  for(var i = 0; i < arr.length; i++){
        if (arr[i] === num){
            console.log(i);
        }
  }
  
}

getIndexToIns([5, 3, 20, 3], 5);