//if-else condition
let num1= 10;
let num2= 20;
if(num1<num2){
  console.log(num1+ " is less than " +num2);
}else{
  console.log(num1+ " is not less than" +num2);
}

//even odd
if(num1%2 ==0 ){
  console.log("The number is even");
}else{
  console.log("The number is odd");
}

//else-if st
if(num1>5){
  console.log("The number is greater than 5");
}else if(num1<5){
  console.log("The number is less than 5 ");
}else{
  console.log("The number is equal to 5")
}
//Ternary Operator
let result= num1>5? 'Yes num1 is greater than 5': 'No num2 is not greater than 5';
console.log(result);

//switch st
const award="first place";
switch(award){
  case 'first place':
    console.log("You receive gold");
    break;
    case 'second place':
    console.log("You receive silver");
    break;
    case 'third place':
    console.log("You receive bronze");
    break;
}