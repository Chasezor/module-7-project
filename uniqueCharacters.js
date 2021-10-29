const hasUniqueChars = (str) =>{
    let charTable = {};
    for(i = 0; i < str.length; i++)
    {
    if(charTable[str[i]] !=null)
    {
        charTable[str[1]] = 1;
        return false
     }
    else{
        charTable[str[i]] = 0
        }
    }
    return true
}


console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False