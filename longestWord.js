const findLongestWord = (word1, word2) => 
{
    if (word1.length > word2.length){
        return word1.length
    }
    else {
        return word2.length
    }
}


console.log(findLongestWord('cat', 'apple'))

//findLongestWord(["hi", "hello"]);
// -> 5