//accessing array elements
const numbers= ['1','two','3','4','five'];
console.log(numbers[0]);

//updating elements
numbers[3]='four';
console.log(numbers[3]);

//length of array
console.log(numbers.length);




//array methods
const colors= ['red','green','blue','brown'];

//push(): to add ele to end of array
console.log("Before using push: " , colors);
colors.push("black")
console.log("After using push :" ,colors );


//pop(): removes element from last index of array
const subject= ['science','math','social','nepali','computer'];
console.log("Before using pop: " , subject);
subject.pop();
console.log("After using pop: " , subject);


//shift(): removes from 1st index of array
console.log("Before using shift: " , subject);
subject.shift();
console.log("After using shift: " , subject);


//unshift(): adds to beginning of array
console.log("Before using unshift: " , subject);
subject.unshift('ehp','dsa','statistics');
console.log("After using uhshift: " , subject);


//indexOf(): return index at which ele is found
console.log("Before using indexof: " , subject);
console.log("After using indexof: " , subject.indexOf('math'));


//slice(): return from selected start to end
console.log("Before using slice: " , subject);
console.log("After using slice: " , subject.slice(2));


//splice(): changes contents by removing or replacing ele
console.log("Before using splice: " , subject);
subject.splice(1,2,'comp');
console.log("After using splice: " , subject);


//sort(): to sort ele
console.log("Before using sort: " , subject);
subject.sort();
console.log("After using sort: " , subject);


//sort in dec order
[1, 2, 3, 4, 5].sort((a, b) => {
  console.log({a, b}); // a is secondItem, b is firstItem of an array
  return b-a; // return -ve value for DESC and truthy value for ASC order
});


//join(): concat all 
console.log("Before using join: " ,subject);
console.log("After using join: " , subject.join('-'));


//concat():merge two or more array
const arr1= ['a','b','c'];
const arr2= ['d','e','f'];
const arr3=arr1.concat(arr2);
console.log("After concat:" , arr3);


//toString(): returns String
const arr=[1,2,'a','34jj'];
console.log(arr.toString());


//reduce():
const forreduce=[1,2,3,4,5];
const initialval=0;
const result= forreduce.reduce((accumulator,currval)=> accumulator+currval,initialval);
console.log("After using reduce:" +result);


//filter(): creates new array filled with ele that pass a test provided by function
const res= subject.filter((sub)=>sub.length> 4 );
console.log("After using filter:" ,res);

//find(): return 1st ele provided that satisfies provided test function
const num= [5,6,12,34,55,3,4]
const findit= num.find((ele)=>ele >10);
console.log("After using find:" ,findit);


//findIndex: 
const findindex= num.findIndex((ele)=>ele >50);
console.log("After using findindex:" ,findindex);




//includes():to see weather arr includes certain val among entries
const check=[1,2,3,4,5];
console.log(check.includes(2));


//every():to see if all ele pass the test
const array=[45,60,5,78,7];
const isless= (less)=>less<50;
console.log(array.every(isless));


//some():weather at least 1 ele pass test
const iseven =(even)=>even %2===0;
console.log(array.some(iseven));


//flat():concat sub arr ele 
const newarr=[1,2,[3,4,5,6,7],8];
console.log(newarr.flat());


//keys(): returns new array iterator obj that contains keys for each indexOf
const keymethod= ['a','b','c'];
const iterator= keymethod.keys();
for(const key of iterator){
  console.log("Using key method:" ,key);
}

//entries: key val pairs 
const entriesmethod= ['a','b','c'];
const iterator1= entriesmethod.entries();
for(x of iterator1){
  console.log(x);
}

//findLast(): iterates in rev and returns val of first ele that satisfy function
const findlastmethod= [5,7,8,5];
const found= findlastmethod.findLast((ele)=> ele>6 );
console.log("Using findLast",found);


//map:create new arr with res of calling provided func on every ele
const maparr=[5,6,7,8];
const mapmethod=maparr.map((ele)=>ele *2);
console.log("Using map method:" ,mapmethod);











