// by using methods 
function rev(number){
  const reversed= number.toString().split('').reverse().join('');   //change to string for reversing 
  return Number(reversed);   //to change the string to num
}
let reversednum= rev(1236547);
console.log(reversednum);


//using loop
function revNum(digits){
  let rev=0;
  while(digits>0){
    rev=rev*10+ digits%10;
    digits=digits/10;
  }
  return rev;
}
let result= revNum(1236547);
console.log(result);
