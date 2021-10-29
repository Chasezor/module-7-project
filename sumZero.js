const addToZero = (arr) =>{
    for(i = 0; i < arr.length; i++)
        if(arr[i] <= 0){
            return true
        }
  return false      
}


console.log(addToZero([]))
//addToZero([]);
// -> False

console.log(addToZero([1]))
//addToZero([1]);
// -> False
console.log(addToZero([1, 2, 3]))
//addToZero([1, 2, 3]);
// -> False

console.log(addToZero([1, 2, 3, -2]))
//addToZero([1, 2, 3, -2]);
// -> True