export abstract class dioAccount {
  private name: string;
  readonly accountNumber: number;
  balance: number | undefined = 0;

  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance;
  }

  public setName = (name: string): void => {
    this.name = name;
    console.log("New name altered!");
  };

  getName = (): string => {
    return this.name;
  };

  depoist = (): void => {
    if (this.validateStatus()){
        console.log("Você depositou")
    }
  };

  withdraw = (): void => {
    console.log("Você Sacou");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Status false");
  };
}
