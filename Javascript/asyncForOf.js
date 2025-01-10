async function forOfLoop(items){
  console.log("before")
  for(const x of items){
    await print(x,1000);   //if await not used here so before after and arr would be printed
  }
    console.log("After");
}

function print(x,time){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(x);
      resolve();
    },time )
  })
}


const items=['toy','pen','mobile'];
forOfLoop(items);







