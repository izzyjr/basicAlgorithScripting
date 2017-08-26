function truncateString(str, num) {
    if(num < 3){
        var newStrTwo = str.slice(0, num);
        console.log('' + newStrTwo + '...');
    }
    else if(str.length <= num){
        console.log(str);
    }
    else if (num > 3){
        var shortLength = num - 3;
        var newStr = str.slice(0, shortLength);
        console.log('' + newStr + '...');
    }
}


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);