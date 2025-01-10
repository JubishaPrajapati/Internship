//datatype conversion

//converting number to String
let num1= 123; //integer
let num2= 5.5; //float number

console.log("Type of num1 before conversion is :" + typeof num1 + " and after conversion is: " + typeof num1.toString());
console.log("Type of num2 before conversion is:"+ typeof num2 + "and after conversion is: " + typeof num2.toString())
//Note: we can use String() or toString() function 

//converting number to boolean 
console.log("Type of num1 before conversion is:" + typeof num1 + " and after conversion is: " + typeof Boolean(num1));
//converting number to undefined
let num3=2;
num3=undefined;
console.log(typeof (numb3));


//converting boolean to string
console.log("Type of true before conversion is:" +typeof true+ "and after conversion is: " + typeof true.toString())
//converting boolean to number
console.log("Type of false before conversion is:" +typeof false+ " and after conversion is: " + typeof Number(false));

//converting string to boolean
let string= "hello";
console.log("Type of string before conversion is:" + typeof string + " and after conversion is: " + typeof Boolean(string));
//converting string to number
console.log("Type of string before conversion is:" + typeof string + " and after conversion is: " + typeof Number(string));

//converting null to string 
let nullval= null;
console.log("Type of null before conversion is :" + typeof nullval + " and after conversion is: " + typeof String(nullval));
//converting null to number
console.log("Type of null before conversion is:" + typeof nullval + " and after conversion is: " + typeof Number(nullval));
//converting null to Boolean
console.log("Type of null before conversion is:" + typeof nullval + " and after conversion is: " + typeof Boolean(nullval));


//converting undefined to string 
let undefine;
console.log("Type of undefine before conversion is:" + typeof undefine + " and after conversion is: " + typeof String(undefine));
//converting undefined to number
console.log("Type of undefine before conversion is:" + typeof undefine + " and after conversion is: " + typeof Number(undefine));
//converting undefine to Boolean
console.log("Type of undefine before conversion is:" + typeof undefine + " and after conversion is: " + typeof Boolean(undefine));

//converting to undefined and nullval
let value = undefined;
let convertedValue = value === undefined ? null : value;
console.log(convertedValue);

let value3 = 25;
let convertedValue3 = value3 === undefined ? null : value3;
console.log(convertedValue3);








