function fibonacci(n) {
    if (n <= 1) {
        return n; // if 0 or 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// generate Fibonacci series up to a given length

function genFibonacciSeries(length) {
  let fibseries = [];
  
    if (length <= 0){
       return [];
    }
    
    for (let i = 0; i < length; i++) {
        fibseries.push(fibonacci(i));
    }
    return fibseries;
}

const length = 8; 
const series = genFibonacciSeries(length);
console.log(series);