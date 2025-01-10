class Animal{
  constructor(name){
    this.name=name;
  }
  
  sound(){
    console.log(`${this.name} makes a sound`)
  }
}

class Dog extends Animal{
  constructor(name,breed){
    super(name);
    this.breed=breed;
  }
  
  speak(){
    console.log(`${this.name} barks`);
  }
  displayBreed(){
    console.log(`${this.name} is a ${this.breed}`);
  }
}
const res= new Dog('Scooby','Golden Retriver');
res.sound();
res.speak();
res.displayBreed();