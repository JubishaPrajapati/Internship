//creating objects
let schoolobj={
  name: "Bidhyalaya",  //name is key and bidhyalaya is value 
  location: "Thamel",
  established: "1989",
  departments: "4"
  
}

//accessing properties
//using dot 
console.log(schoolobj.location);

//using brackets
console.log(schoolobj["name"]);

//property assignment
schoolobj.location= "Khusibu";
console.log(schoolobj.location);

//nested objects
let college={
  stuname: "Bikash",
  degree: {
    bachelors: ['BIM','BBM','CSIT'],
    plus2: "2 years"
  },
  teachers:{
    subjectteacher:{
      science:"Ravi",
      math:"Riya",
      social:"Laxmi"
    }
  }
}
console.log(college.teachers.subjectteacher.science);

//object methods 
const person ={
  firstname: "Alex",
  lastname: "Thapa",
  address: "Nayabazar",
  fullname: function(){
    return this.firstname + " " + this.lastname;
  }
}
//accessing obj methods
console.log(person.fullname());  //objectname.methodname()


