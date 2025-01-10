//without using promise all in .map
async function withMap2(itemsArr2){
  console.log("before");
  itemsArr2.map(async items2=>{
    await print2(items2);
  });
  console.log("after");        //after is logged first becuz map func doent wait for async func to complete
}

function print2(items2){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(items2);
      resolve();
    },1000)
  })
}

const itemsArr2=['toy','mobile','pen'];
withMap2(itemsArr2);
