async function filterFunc(items){
  console.log("before")
  const afterFilter= await items.filter(async(val)=> await print(val))
    console.log("After");
}

function print(x){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(x);
      resolve();
    },1000)
  })
}


const items=['toy','pen','mobile'];
filterFunc(items);

