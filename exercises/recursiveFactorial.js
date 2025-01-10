function recursiveFact(n){
  if(n===0||n===1){
    return 1;
  }else{
    return n* recursiveFact(n-1);
  }
}
console.log(recursiveFact(4));
console.log(recursiveFact(6));
console.log(recursiveFact(9));