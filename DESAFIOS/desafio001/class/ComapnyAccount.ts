class CompanyAccount extends DioAccount {

    // Método de empréstimo
    getLoan(amount: number): void {
      if (this.getStatus()) {
        this.deposit(amount);
        console.log(`Empréstimo de ${amount} realizado. Saldo atual: ${this.getBalance()}`);
      } else {
        console.log("Conta inativa. Não é possível realizar empréstimo.");
      }
    }
  }