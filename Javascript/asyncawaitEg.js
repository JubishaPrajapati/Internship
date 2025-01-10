 async function myFunction(){
   
   let ktmWeather= new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve("27 Degree")
     },2000)
   })
   
   let pkrWeather= new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve("30 Degree")
     },5000)
   })
   
   console.log("Fetching ktm weather please wait..");    //val has been recieved from resolve and now waiting as we uase await
   let ktmW= await ktmWeather;
   console.log("Fetched ktm weather:" +ktmW);       
   
   console.log("Fetching pkr weather please wait..");
   let pkrW= await pkrWeather;
   console.log("Fetched pkr weather:" +pkrW);
   return [ktmW,pkrW];
   
 }
 
 const yourFunction= ()=>{
   console.log("I am yourfunc and i am not waiting");    //parallell execution huncha myfunc pachi nai huncha await agadiko samman
 }
 
 
 console.log("I am testing async await.")
let res1= myFunction();
let res2= yourFunction();    //if we use await in this func as well then myfunc will run fully then only yourfunc will run this shows how the flow of code 
res1.then((val)=>{
  console.log(val);
})