const array=[1,2,3,4]

  async function processArray(array) {
  console.log("before");
    for (let i = 0; i < array.length; i++) {
          await someAsyncFunction(array[i]);
          //console.log(array[i]);
    }
    console.log("after");
}

function someAsyncFunction(item){
  return new Promise((resolve)=>{
    
    setTimeout(()=>{
    console.log(item);
    resolve(item);
  },1000)
  })
  
  
}

processArray(array);

