class BankAccount {
  constructor(balance, accountHolder, accountNumber) {
    // Constructors are specific to the instance of the class not instances
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }

  static bankGuidelines = 'RBI'; // Properties which a are binded or specific to the classes not instances

  static bankHrs() {
    return '9-5';
  } // Methods which exist on the class itself (Also called as class methods)

  get interestPercent() {
    // Allow to get a property of a class
    return this.balance * 0.1;
  }

  /**
   * @param {number} value
   */
  set bonusBalance(value) {
    // Allow to update property
    if (value < 0) {
      throw new Error('Value cannot be negative');
    } else {
      this.balance = Number(value) + Number(this.balance);
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid deposit amount');
    }
    return this.balance;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount or insufficient funds');
    }
    return this.balance;
  }

  getAccountInfo() {
    return `Account Holder: ${this.accountHolder}, Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
  }
}

let harsh = new BankAccount(10000, 'Harsh', 133);
harsh.bonusBalance = '10000';
console.log(BankAccount.bankGuidelines);
console.log(BankAccount.bankHrs());
console.log(harsh.getAccountInfo());
console.log(harsh.interestPercent, 'interestPercent');

class SBI extends BankAccount {
  constructor(balance, accountHolder, accountNumber, branch) {
    super(balance, accountHolder, accountNumber);
    this.branch = branch;
  }

  describe() {
    return `SBI Account - ${this.getAccountInfo()}, Branch: ${this.branch}`;
  }
}

let harshSBI = new SBI(10000, 'Harsh', 133, 'Mumbai');
console.log(harshSBI.describe());
harshSBI.deposit(5000);
harshSBI.withdraw(2000);

class HDFC extends BankAccount {
  constructor(balance, accountHolder, accountNumber, hasCreditCard) {
    super(balance, accountHolder, accountNumber);
    this.hasCreditCard = hasCreditCard;
  }

  getCreditCardInfo() {
    return `The account holder ${this.accountHolder} ${
      this.hasCreditCard ? 'has' : 'does not have'
    } a credit card.`;
  }
}

let harshHDFC = new HDFC(10000, 'Harsh', 133, false);
console.log(harshHDFC.getCreditCardInfo());
harshHDFC.deposit(3000);
harshHDFC.withdraw(1000);
