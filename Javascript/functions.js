//declaration of function
function calcsum(num1,num2){
  return num1+num2;
}
console.log("The sum of two numbers:" + calcsum(2,5));



//function expression: stored in a var assignment 
const sq= function(num){
  return num*num;
}
console.log("The square of number is: " +sq(2));


//calling functions
function factorial(n){
  if(n===0 || n===1){
    return 1;
  }else{
    return n* factorial(n-1);
  }
}
console.log(factorial(1));
console.log(factorial(4));


//function hoisting: runs even if function is being called before its declared
console.log("The subtraction of two numbers:" +subtract(10,5));

function subtract(num1,num2){
  return num1 * num2;
}


//default parameters
function yourname(name="Jubisha"){
  console.log(`Hi I am  ${name}` );
}
yourname();   //default
yourname("Alex");  //name passed



//function scoping 
let globalscope= "I am global var";

function scoping(){
  let localscope= "I am local var";
  
  console.log(globalscope);  //accessible
  console.log(localscope);  //accessible
}

scoping();

console.log(globalscope);   //accessible
//console.log(localscope);    //ReferenceError



//nested function
function addsq1(a,b){   //parentfunc
  function square1(n){  //defined inside another function
    return n*n;       //can access var from parent func
  }
  return square1(a) + square1(b);
}

console.log("After adding the sq numbers using nested function:" +addsq1(2,3));



//helper function
function square2(n){
  return n*n;
}
function addsq2(a,b){
  return square2(a)+ square2(b);
}
console.log("After adding the sq numbers using helper function:" +addsq2(3,3));
















