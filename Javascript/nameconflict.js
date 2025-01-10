function samenameconflict(){
  console.log("First func ");
}
function samenameconflict(){
  console.log("Second func");
}
samenameconflict();    



//same name function with different parameters
function conflict(a,b){
  console.log(a+b);
}
function conflict(a,b,c){   //overwrites prev function
  console.log(a+b+c);
}
conflict(1,2,3);


//name conflicts in function
function outside(){
  const x=5;
  function inside(x){
    return x*2;
  }
  return inside
  ;
}
console.log(outside()(10));


