class University{
  constructor(name){
    this.name=name;
    this.departments=[];
  }
    
   addDept(dept){
    if(!this.departments.includes(dept)){
      this.departments.push(dept);
      console.log(`Department "${dept}" added to ${this.name}`)
    }else{
      console.log(`Department "${dept}" already exists`);
    }
  }
  
  removeDept(dept){
    const index= this.departments.indexOf(dept);
    if(index !== -1){
      this.departments.splice(index,1);    //index:where to start removing from , 1: remove only 1 item
      console.log(`Department "${dept}" has been removed from ${this.name}`);
    }else{
      console.log(`Department "${dept}" does not exist in ${this.name}`);
    }
  }
  
  
    displayDept(){
    if(this.departments.length>0){
      console.log(`Departments in ${this.name}: ${this.departments}.`);
    }else{
      console.log(`No departments found`);
    }
  }
}
const uniName= new University("Kathmandu University");
uniName.addDept("IT");
uniName.addDept("Business");
uniName.addDept("Hotel Management");
uniName.addDept("Science");


uniName.removeDept("Science");

uniName.displayDept();




