const nome ='Rebeca'
const concatenacao ='Olé' + nome +'!'

const template =`
Olá
${nome}!`
console.log(concatenacao, template)
//A Cráse aceita a quebra de linha
// O Dólar ${exemplo} substituiu a variavel nome dentro do texto, fazendo uma: Interpolação
// expressões...
console.log(`1+1 = ${1 + 1}`)
// A interpolação com cráse só funciona com o uso do ${}

const up = texto => texto. toUpperCase() 
//.toUpperCase ele transforma para a letra maiúscula, isso é a função arrow, atribuida a variável up.
console.log(`Ei... ${up('Cuidado')}`) // Dentro de um template String, pode chamar uma função.