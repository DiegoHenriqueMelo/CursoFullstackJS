interface Dev {
  nome: string;
  idade: number;
  profissao?: string; //PROPRIEDADE OPICIONAL
}

const pessoa1: Dev = {
  nome: "Diego",
  idade: 19,
};

const pessoa2: Dev = {
  nome: "Milena",
  idade: 21,
  profissao: "Psicóloga",
};

const arrPessoa: Array<Dev> = [pessoa1, pessoa2]; // DECLARAR ARRAY DE OBJ

const arrNum: Array<number> = [1, 2, 3];

const arrStr: string[] = ["1", "2", "3"];
