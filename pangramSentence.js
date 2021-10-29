const isPangram = (inputStr) =>{
    compStr = ("The quick brown fox jumps over the lazy dog!")
    
    for(i = 0; i < inputStr.length; i++)
        if(inputStr[i] != compStr[i]){
            return true
        }
  return false      
}


isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False