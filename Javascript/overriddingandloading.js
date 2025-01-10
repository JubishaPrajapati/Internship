//overridding: js supp overriding
class Parent{
  greet(){
    console.log("Hi I am from parent class");
  }
}
class Child extends Parent{
  greet(){   //this overrides greet method
    console.log("Hi I am from child class");
  }
}

const checkParent= new Parent();
checkParent.greet();

const checkChild=new Child();
checkChild.greet();



//overloading
class OverLoad{
  calcArea(side){   //this second method overwrites the first method
    console.log(side*side);
  }
  calcArea(sideA,sideB){
    console.log(sideA*sideB);
  }
  
  
  
}

const area1= new OverLoad();
area1.calcArea(2,4);

const area2= new OverLoad();
area2.calcArea(2);