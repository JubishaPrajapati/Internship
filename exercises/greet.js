let day= new Date();   //day
let time= day.getHours();  //time of the day

console.log(time<12?"Good morning ": time<18? "Good afternoon": "Good evening");