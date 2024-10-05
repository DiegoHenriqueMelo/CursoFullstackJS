class DioAccount {
    private balance: number;
    private status: boolean;
    readonly name: string;
    readonly accountNumber: number;
  
    constructor(name: string, accountNumber: number, status: boolean = true) {
      this.name = name;
      this.accountNumber = accountNumber;
      this.balance = 0;
      this.status = status;
    }
  
    // Método de depósito
    deposit(amount: number): void {
      if (this.status) {
        this.balance += amount;
        console.log(`Depósito de ${amount} realizado. Saldo atual: ${this.balance}`);
      } else {
        console.log("Conta inativa. Não é possível realizar depósito.");
      }
    }
  
    // Método de saque
    withdraw(amount: number): void {
      if (this.status && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Saque de ${amount} realizado. Saldo atual: ${this.balance}`);
      } else {
        console.log("Não foi possível realizar o saque. Verifique o status da conta ou saldo insuficiente.");
      }
    }
  
    // Método para verificar o saldo (opcional)
    getBalance(): number {
      return this.balance;
    }
  
    // Método para verificar o status (opcional)
    getStatus(): boolean {
      return this.status;
    }
  }