//it expands iterables into more elements

//spread operator in Array
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
const combined= [...arr1,...arr2];
console.log("Using spread operator to combine 2 arrays:" , combined);

const addmid=[100, ...arr1, 200,300];
console.log("Using spread operator to add 1 array in middle:" ,addmid);

//minmax using spread
console.log(Math.max(arr1));
console.log(Math.min(1,2,3));
console.log(Math.max(...arr1));


//spread operator in objects
const object= {
  name:"Alex",
  age:"45"
}
const spreadop={...object};
console.log(spreadop);


//combine objs with spread operator
const obj1={person1: "riya", person2:"raghav"};
const obj2= {loc1: "Thamel", loc2:"Lagan"};
const combinedobj= {...obj1,...obj2};
console.log("Using spread operator to combine 2 objs:");
console.log(combinedobj);


//spread in func 
const num=[1,2,3];
function sum(a,b,c){
  return a+b+c;
}
console.log(sum(...num));

