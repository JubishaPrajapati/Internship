function countletter(string){
  return string.length;
}
console.log(countletter("hello"));




let string2="Hello world this is jubisha";
let count2=0;
for(let i=0;i<string2.length;i++){
  if(string2[i]!==""){
    count2++;
  }
}
console.log("The number of char in string2:" +count2)