
let sumeven=0; 
let sumodd=0; 

for(let i=0; i<=15; i++){
  if(i%2 == 0){
    sumeven+=i;
  }else{
    sumodd+=i;
  }
}
console.log(sumeven);
console.log(sumodd);