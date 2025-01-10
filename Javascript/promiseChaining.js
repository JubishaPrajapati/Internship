
//promise chaining
let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Resolved after 2 sec");
    resolve(56);
  },2000);
})

p1.then((value)=>{
  console.log(value);
  
  let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Promise2");
    },2000);
  })
  return p2;
}).then((value)=>{
  console.log(value);
  
}).then((val2)=>{
  console.log("Finally done");
})




