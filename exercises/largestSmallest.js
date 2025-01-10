const numarr=[1,2,3,4,5];

let largestnum= numarr[0];
let smallestnum= numarr[0];

for(let i=1; i<numarr.length;i++){
  
  if(numarr[i] > largestnum){
  largestnum = numarr[i];
  }else if(numarr[i] < smallestnum){
  smallestnum =numarr[i];
  }
}

console.log(largestnum);
console.log(smallestnum);