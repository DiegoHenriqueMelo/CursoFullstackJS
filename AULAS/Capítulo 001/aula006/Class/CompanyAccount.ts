import { dioAccount } from "./DioAccount";

export class companyAccount extends dioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  getLoan = (): void => {
    console.log("Você pode fazer um empréstimo");
  };
  deposit = (): void => {
    console.log("A empresa Depositou");
  };
}
