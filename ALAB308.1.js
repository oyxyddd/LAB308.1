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

// Part 2: Trompoliness


// Part 3: Deferred Execution
const bodyEl = document.querySelector('body');
const txtEl = bodyEl.appendChild(document.createElement('h2'));
function primeList(n){
    if (n == 1) {
        return [1]
    } else if (n == 2) {
        return [2,1]
    }

    for (let j = 2; j < n; j++ ){
        if (n % j === 0 ){
        return primeList(n-1)
        break;
        }
        return [n,primeList(n-1)];
    }
    }

// console.log(primeList(10).flat(Infinity).toString())
txtEl.textContent = primeList(5000).flat(Infinity).toString()
console.log(txtEl.textContent)
alert('Calculation is finished !') 