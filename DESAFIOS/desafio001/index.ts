const account1 = new DioAccount("João", 1001);
const companyAccount = new CompanyAccount("Empresa XYZ", 2001);
const specialAccount = new SpecialAccount("Maria", 3001);

// Realizar operações nas contas
account1.deposit(100);
account1.withdraw(50);
account1.withdraw(70); // Não deve permitir, pois o saldo será inferior ao solicitado

companyAccount.deposit(500);
companyAccount.getLoan(1000); // Saldo deve ser atualizado após o empréstimo

specialAccount.deposit(100); // Deve depositar 110 (100 + 10)