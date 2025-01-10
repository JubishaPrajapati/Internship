function outer() {
  let outerVar = "I am outside!";  // outerVar is declared in the outer function
  
  function inner() {
    console.log(outerVar);  // The inner function has access to outerVar
  }
  
  inner();  // Outputs: "I am outside!"
}

outer();