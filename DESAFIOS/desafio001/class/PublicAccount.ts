class SpecialAccount extends DioAccount {

    // Sobrescrever o método de depósito para acrescentar 10 ao valor
    deposit(amount: number): void {
      if (this.getStatus()) {
        const bonus = 10;
        const newAmount = amount + bonus;
        super.deposit(newAmount);
        console.log(`Depósito com bônus: valor informado ${amount}, valor depositado ${newAmount}`);
      } else {
        console.log("Conta inativa. Não é possível realizar depósito.");
      }
    }
  }