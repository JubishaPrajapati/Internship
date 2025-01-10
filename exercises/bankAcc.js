class BankAccount{
  constructor(accountNum, balance){
    this.accountNum=accountNum;
    this.balance=balance;
  }
  
  depositMoney(amount){
    if(amount>0){
      this.balance += amount;
      console.log(`Deposited ${amount} into your account`);
      console.log(`New balance: ${this.balance}`);
    }else{
      console.log("Deposite amount should be positive ");
    }
  }
  
  withdrawMoney(amount){
    if(amount>0 && amount<=this.balance){
      this.balance -= amount;
      console.log(`Withdrew ${amount} from your account`);
      console.log(`Remaining balance: ${this.balance}`);
    }else if(amount > this.balance){
      console.log("Insufficient balance");
    }else{
      console.log("Withdraw amount should be positive ");
    }
  }
}
const portion= new BankAccount(101,1000);


portion.depositMoney(200);
portion.withdrawMoney(500);
