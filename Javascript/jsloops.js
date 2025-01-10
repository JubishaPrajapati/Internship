//for loop
for (f=1; f<=5; f++){
  console.log("Value of f from for loop is:" +f);
}

//while loop
let w=1;
while(w<5){
  console.log("Value of w from while loop is:" +w);
  w++;
}

//dowhile loop
let d=1;
do{
  console.log("Value of d from do-while loop is:" +d);
  d++;
}
while(d<5);

//for-of loop
const subjects=["Math", "Science","Social","Nepali"];
for(let x of subjects){
  console.log(x);  //return of value 
}

//for-in loop 
for(let x in subjects){
  console.log(x);  //return of index
}



