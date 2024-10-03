class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  depoist = () => {
    console.log("Você depositou");
  };

  withdraw = () => {
    console.log("Você Sacou");
  };
}

const newAccount: Account = new Account("Diego", 1);

console.log(newAccount);
newAccount.depoist()
newAccount.withdraw()

