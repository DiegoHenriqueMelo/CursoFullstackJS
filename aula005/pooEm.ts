class User {
  nome: string = "Diego";
  age: number = 19;

  constructor(nome: string, age: number) {
    this.nome = nome;
    this.age = age;
  }

  showName = () => {
    console.log(this.nome);
  };
}

const user: User = new User("Milena", 21);
user.showName();
const user1 = new User("Diego", 19);
user1.showName();
