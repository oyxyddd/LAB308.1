// Part 1: Stack Overflow
let counter = 0;
function countStackSize(){
    counter++;
    countStackSize();
}

try{
    countStackSize();
}catch(error){
    console.log(error);
    console.log(counter);
}