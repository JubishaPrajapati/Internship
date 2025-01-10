

//arrow function without parameter: empty parentheses is used()
const name=() =>{
  console.log("My name is Jubisha");
}
name();

//single line block
let myfunc=(a,b)=> a*b;
console.log("Using single line block function:" +myfunc(2,2));


//with single parameter
const square=(x)=>{
  console.log("Square of number by taking single parameter:" +x*x);
}
square(10);


//with multiple parameter
const addition=(x,y,z)=>{
  console.log("Addition by taking multiple parameter:" ,x+y+z);
}
addition(1,2,3);


//with default parameter
const defaultnames=(name1="ram", name2="sita", name3="gita")=>{
  console.log("Using defaultfunc:" ,name1 + " " + name2 +" " + name3);
}
defaultnames();
defaultnames("Anish","Garima","Pritika");


//return obj literal
const person=(firstName,lastName)=>({
  first: firstName,
  last: lastName
})

console.log(person("Jubi","Prajapati"));
