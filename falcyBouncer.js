
function bouncer(arr) {
  var newArr = arr.filter(function(item){
    if (item !== false || ""){
        return item;
    }
});
  console.log(newArr);
}
bouncer([1, null, NaN, 2, undefined]);