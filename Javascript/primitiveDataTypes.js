//The types of data types in js 

let a= 1;
let b= "Hello I am Jubisha";
let c;
let d= true;
let e= false;
let f= 123456666222222222n;
let g= "";
let h= Symbol("Hello World");
let i= null;

console.log("The data type of " + a + " is :" + typeof a);
console.log("The data type of " + b + " is :" + typeof b);
console.log("The data type of " + c + " is :" + typeof c);
console.log("The data type of " + d + " is :" + typeof d);
console.log("The data type of " + e + " is :" + typeof e);
console.log("The data type of " + f + " is :" + typeof f);
console.log("The data type of " + `""`  + " is :" + typeof g);
console.log(typeof h);
console.log(typeof i);

//datatype conversion

//converting number to String
let num1= 123; //integer
let num2= 5.5; //float number

console.log("Type of num1 before conversion is :" + typeof num1 + " and after conversion is: " + typeof num1.toString());
console.log("Type of num2 before conversion is:"+ typeof num2 + "and after conversion is: " + typeof num2.toString())

//converting boolean to string
console.log("Type of true before conversion is:" +typeof true+ "and after conversion is: " + typeof true.toString())

//converting string to number
let str1= "Hello";

console.log("Type of str1 before conversion is:" + typeof str1 + " and after conversion is: " + typeof Number(str1));

//converting boolean to number
console.log("Type of false before conversion is:" +typeof false+ " and after conversion is: " + typeof Number(false))















