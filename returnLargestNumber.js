function largestOfFour(arr) {
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++){
      var max = 0;
      for (var d = 0; d < arr[i].length; d++){
          if (arr[i][d] > max){
              max = arr[i][d];
          }
      }
      newArr.push(max);
  }
  console.log(newArr);
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
