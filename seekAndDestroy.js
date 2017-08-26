function destroyer(arr) {
  var args = Array.from(arguments);
  for(var i = 1; i < args.length; i++){
        for(var d = 0; d < args[0].length; d++){
            if(args[0][d] === args[i]){
                delete args[0][d];
            }
        }
    }
  var newArray = args[0].filter(function(item){
      if (item !== ""){
        return item;
    }
  });
  console.log(newArray);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

