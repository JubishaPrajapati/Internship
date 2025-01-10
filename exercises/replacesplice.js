const array= [1,2,3,4,5];

console.log("Orginal array: " , array);
array.splice(1,1,"two");
console.log("Replacing elements in array: " , array);


console.log("Orginal array: " , array);
array.splice(3,1);
console.log("Deleting elements in array: " , array);