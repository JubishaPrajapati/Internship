
function hellofn(firstconst, ...names){
  const res=names.map(ele=> [firstconst,ele]);
  return res;
}
const x=hellofn("hello","john","isha");
console.log(x);



function hellofn2(firstconst2, ...names2){
  const arr=[];
  names2.forEach(ele=>{
    arr.push([firstconst2,ele]);
  })
  return arr;
}
const x2=hellofn2("hello","john","isha");
console.log(x2);