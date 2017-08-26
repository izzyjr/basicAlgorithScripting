
function repeatStringNumTimes(str, num) {
    if (num < 0) {
        str = '';
        console.log(str);
    } else {
        console.log(str.repeat(num));
    }
    
}

repeatStringNumTimes("abc", -3);