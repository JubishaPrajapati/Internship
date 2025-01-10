let checkNum=11;
let i=2;
let prime=true;

if(checkNum===1){
    console.log("1 is neither a prime nor composite number");
}else{
while(i<checkNum){
  if(checkNum % i==0){
    prime= false;
    break;
  }
  i++;
}
  if(prime==false){
    console.log(checkNum+ " is not a prime number");
  }else{
    console.log(checkNum+ " is a prime number");
  }
}