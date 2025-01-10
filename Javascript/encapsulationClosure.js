//using closure creating priv vars
//priv var is not directly exposed but we can interact with it through public methods
function Counter(){
  //defined in outer func
  //priv var which is declared in the scope of outer func which is not directly accessible outside counter func
  let count=0;   
  
  return{
    //func have access to count due to lexical scoping
    increment(){
      count++;
      console.log(`Count: ${count}`);
    },
    decrement(){
      count--;
      console.log(`Count: ${count}`);
    },
    getCount(){
      return count;
    }
  }
}

//creating an instance (myCount)
const myCount= Counter();  //call outer func that returns inc dec and getcount
myCount.increment();
myCount.increment();
myCount.decrement();

console.log(myCount.count);   //undefined becuz count var is privtae and not exposed directly outside counter func
console.log(myCount.getCount());



// using closure for private methods
function BankAcc(initialBlc){
  let balance= initialBlc;   //priv var
  
  function validateAmt(amt){
    return amt >0;
  }
  
  return{
    deposit(amt){
      if(validateAmt(amt)){
        balance += amt;
        console.log(`Deposited: ${amt}.   Balance: ${balance}`)
      }else{
        console.log("Invalid deposit amount")
      }
    },
    withdraw(amt){
      if(validateAmt(amt) && amt<=balance){
        balance -= amt;
        console.log(`Withdrew: ${amt}.   Balance: ${balance}`)
      }else{
        console.log("Invalid withdraw amount")
      }
    },
    getBlc(){
      return balance;
    }
  }
}
const res= BankAcc(1000);
res.deposit(500);
res.withdraw(200);
console.log(res.getBlc());   //accesible via public method

console.log(res.balance);  //undefined as balance is private 

console.log(BankAcc());
// console.log(validateAmt());   //not accesible
