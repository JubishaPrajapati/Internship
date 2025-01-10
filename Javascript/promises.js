//promise SyntaxError
//let myPromise= new Promise(function(resolve,reject))


//creating promises
let myFirstPromise= new Promise(function(resolve,reject){
  let success=true;
  
  if(success){
    resolve("The data has been loaded successfully");
  }else{
    reject("There was error loading");
  }
});


//using then and catch methods
myFirstPromise.then(function(msg){     //then:called when promise is fulfilled
  console.log(msg);
}).catch(function(error){         //catch: called when promise is rejected
  console.log(error);
});





//both success case and error handling inside .then() method
let myPromise= new Promise(function(resolve,reject){
  reject("Promise rejected");
})
  
  myPromise.then(function(successmsg){     
    console.log(successmsg);
  })
  .catch(function(errormsg){         
    console.log(errormsg);
});




//error handling inside .catch() method
let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked 
        console.log(errorMessage);
    });
    
    



const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");



let p=new Promise((resolve,reject)=>{
  console.log("Promise is pending");
  setTimeout(()=>{
    console.log("I am a promise and i m fullfilled");
    resolve(true);
  },5000)
})



