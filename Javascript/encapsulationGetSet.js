class Person{
  #name;
  constructor(name,age){
    this.#name=name;
    this.age=age;
  }
  
  get name(){
    return this.#name;
  }
  set name(newname){
    return this.#name=newname;
  }
  
  displayInfo(){
    console.log(`Name: ${this.name}, age: ${this.age}`);
  }
}
const res= new Person("Ganga", 34);
//getter
console.log(res.name);
res.displayInfo();
//setter
res.name= "Yamuna";
console.log(res.name); 

//console.log(res.#name);  //cannot be accessed as name is priv
res.displayInfo();
