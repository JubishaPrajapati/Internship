//creating array of objs
let objArr= [
  {
    name: "Alex",
    age: 12,
    gender: "male"
  },
  {
    name: "jenish",
    age: 63,
    gender: "male"
  },
  {
    name: "gita",
    age: 25,
    gender: "female"
  }
];


//accessing array
//using brackets notation
console.log("First obj in array using bracket notation:");
console.log(objArr[0]);

//using dot notation
console.log("Using dot notation:");
console.log(objArr[1].gender);

//using foreach
console.log("Accessing using foreach:")
objArr.forEach(function(item){
  console.log(item);
});

//using map
console.log("Accessing using map:");
objArr.map(function(item){
  console.log(item);
});

//using filter
console.log("Accessing using filter");
const search= objArr.filter(item=>item.name ==='Alex');
console.log(search);


