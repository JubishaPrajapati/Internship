let arr=[1,2,3,4,5];
let newarr= arr.map(function(val,index){
  return {key:index, value:val};
  
})
console.log(newarr);


const string= ['1','2','3'];
const integers= string.map(str => parseInt(str));  //parseInt : string to integer
console.log(integers);

