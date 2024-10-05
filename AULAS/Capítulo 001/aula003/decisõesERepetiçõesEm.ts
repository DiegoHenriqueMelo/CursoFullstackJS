// const num: number = 16;

// if (num > 15) {
//   console.log("maior que 15");
// } else if (num === 15) {
//   console.log("Igual a 15");
// } else {
//   console.log("Menor que 15");
// }


const typeUser = {
    admin:"Seja bem-vindo admin",
    studant: "Você é um estudante",
    viewer: "Você pode visualizar",
    idade: 10
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}
const usuario = 'admin'
validateUser(usuario)
validateUser('studant')
validateUser('viewer')
validateUser('idade')




