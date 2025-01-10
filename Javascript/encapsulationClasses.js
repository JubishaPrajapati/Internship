class BankAcc{
  #balance;   //priv var
  
  constructor(initialBlc){
    this.#balance= initialBlc;
  }
  
  deposit(amt){
    if(amt>0){
      this.#balance += amt;
      console.log(`Deposited: ${amt}.   Balance: ${this.#balance}`);
    }else{
      console.log("Invalid deposit amount");
    }
  }
  
  withdraw(amt){
    if(amt>0 && amt<=this.#balance){
      this.#balance -= amt;
      console.log(`Withdrew: ${amt}.   Balance: ${this.#balance}`);
    }else{
      console.log("Invalid withdraw amount");
    }
  }
  getBlc(){
    return this.#balance;
  }
}


const res= new BankAcc(1000);

res.deposit(500);
res.withdraw(200);
console.log(res.getBlc());   //accesible via public method

//console.log(res.#balance);  //undefined as balance is private 
