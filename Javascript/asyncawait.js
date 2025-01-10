async function myfunc(){
  return "hello";
}
console.log(myfunc());


//async await always returns a promise
async function funcWithAsync(){
 // function funcWithoutAsync(){
  return 5;
}
funcWithAsync().then((x)=>{
  console.log(x);
})




//use of async
const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));



function asycncronousmethod(){
  let firstpromise= new Promise((resolve,reject)=> resolve("Hello"));
  let secondpromise= new Promise((resolve,reject)=> {
    setTimeout(() =>{
      resolve("world");
    }, 1000);
  })
  let combinedpromise=Promise.all([firstpromise,secondpromise]);
  return combinedpromise;
}

async function display(){
  let data= await asycncronousmethod();
  console.log(data);
}
display();