import { dioAccount } from "./DioAccount";

export class peopleAcconut extends dioAccount {
  doc_Id: number;

  constructor(doc_Id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_Id = doc_Id;
  }
}
