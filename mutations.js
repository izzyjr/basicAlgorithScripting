function mutation(arr) {
    var posCount =0;
    for (var i = 0; i < arr[1].length; i++){
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase(), 0) !== -1){
           posCount++;
       }
    }
    if(posCount === arr[1].length){
        console.log(true);
    }else{
        console.log(false);
    }
    
}

mutation(["Mary", "Army"]);