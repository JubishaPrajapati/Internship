async function withMap(itemsArr){
  console.log("before");
  await Promise.all(itemsArr.map(async items=>{
    await print(items);
  }));
  console.log("after");
}

function print(items){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(items);
      resolve();
    },1000)
  })
}

const itemsArr=['toy','mobile','pen'];
withMap(itemsArr);








