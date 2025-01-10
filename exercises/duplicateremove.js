const x= ["two", "mark","board","two","board"];
const containsarr=[];
const dupsarr=[];
const looparr=[]

//gen arr with letter b and t 
x.forEach(condition=>{
  if(condition.includes("b") || condition.includes("t") ){
    containsarr.push(condition);
  }
})
console.log(containsarr);
 
 
//removing duplicate ele by using includes() method
x.forEach(dups=> {
  if(!dupsarr.includes(dups)){
    dupsarr.push(dups);
  }
})
console.log("Removing duplicate by using includes method:" ,dupsarr);


//removing duplicate ele by using filter() method
const removedups=x.filter((item,index)=>x.indexOf(item) === index);
console.log("Removing duplicate by using filter and indexOf methods:" ,removedups);


//removing duplicate ele by using for loop
for(let i=0;i<x.length;i++){
  if(!looparr.includes(x[i])){
    looparr.push(x[i]);
  }
}
console.log("Removing duplicate by using for loop:" ,looparr);