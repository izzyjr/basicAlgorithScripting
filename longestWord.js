function findLongestWord(str) {
    
    var max = 0;
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++){
        if (words[i].length > max){
            max = words[i].length;
        }
        
    }
    return max;
    
    
}

findLongestWord("The quick brown fox jumped over the lazy dog");
