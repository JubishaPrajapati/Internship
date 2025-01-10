
let evenarr=[];
let oddarr=[];

for(let i=1;i<=20; i++){
  if(i%2==0){
    evenarr.push(i);
  }else{
    oddarr.push(i);
  }
}


const concatinating= evenarr.concat(oddarr);
console.log(concatinating);

const joining=concatinating.join();
console.log("Joining both even and odd:" ,joining);


//reduce
const initialval=0;
const res= concatinating.reduce((accumulator,currval)=> accumulator+currval,initialval);
console.log("Sum result:" ,res);