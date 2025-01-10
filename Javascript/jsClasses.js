//simple js class and consoling the iutput : we need to create instance of class ajd call method
class Person{
  constructor(name,age){  //constructor
    this.name=name;
    this.age=age;
  }
  
  displayInfo(){  //class method
    console.log(`Hi I am ${this.name} and my age is: ${this.age}`);
  }
}

const personInfo= new Person('Samana','20');  //instance or obj 
personInfo.displayInfo();




//omitting constructor: if we dont need any speacial initialization
class TestOmit{
  omitconstructor(){
    console.log("I am testing omit constructor");
  }
}
const displayInfo2=new TestOmit();
displayInfo2.omitconstructor();




//class getters and setters
class Getset{
  constructor(name){
    this.name=name;
  }
  
  get thename(){
    return this.name;
  }
  
  set thename(newname){
    this.name=newname;
  }
}
const displaygetset= new Getset('Gita');
console.log(displaygetset.thename);  //calling getter method

displaygetset.thename="Abhinav";  //calling setter method
console.log("After implying new name: " +displaygetset.thename);



//class declaration hoisting
//new MyClass();              //ref error
//class MyClass{}


//static methods in class
class CheckStatic{
  constructor (x,y){
    this.x=x;
    this.y=y;
  }
  
  //not static method:
  displayAdd(){
    return this.x+this.y;
  }
  
  //static method:
  static displaySub(x,y){
    return x-y;
  }
}

const result= new CheckStatic(10,5);     //creating instance
console.log("Result from non static method: " +result.displayAdd());   //we get res using instance in non static 

//console.log(result.displaySub());  //error cuz this not how we call static methods

console.log("Result from static method: " +CheckStatic.displaySub(10,5));   //have to pass vals 



//field declarations
class Rectangle {
  height = 0;  // Default value
  width;       // Undefined by default

  constructor(height, width) {
    //this.height = height;
    this.width = width;
  }
}

const rect = new Rectangle();
console.log(rect.height);  // 0 (default value)
console.log(rect.width);  



//private properties
class Car{
  #color;
  #model;
  constructor(color, model){
    this.#color=color;
    this.#model=model;
  }
  
  #privmethod(){
    console.log("This is a private method");
  }
  
  output(){
    this.#privmethod();   //private method can be called inside the class
    console.log(`This is ${this.#model} car and its in ${this.#color} color.`)
  }
}

const checkprivate= new Car('red','Toyota');
checkprivate.output();
//checkprivate.#privmethod();  //error cuz trying to call priv method outside the class




















