const peso1 = 1.0
const peso2 = Number('2.0') // 2 Formas de criar um tipo Numérico

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // Se passasse o valorde peso1 para 1.1 deixaria de ser inteiro e apareceria FALSE no console
console.log(Number.isInteger(peso2)) // Métodos dentro de Number pra testes, esseépra saber se é Inteiro ou não.

const avaliacao1=9.871
const avaliacao2=6.871

const total = avaliacao1 + peso1 + avaliacao2 + peso2
const media = total/ (peso1 +peso2)

console.log (media) // sem a operação toFixed(2) - aparece a dizima periódica.
console.log (media.toFixed(2))
// A função toFIxede(2), escolhe quantas casas decimais após a virgula irão mostrar na Execução

console.log(media.toString(16)) //Transforma a média em uma String de ponto flutuante.
/*toString() - dentro dos parentêses o
* 2 corresponde a base binário
* 8 corresponde a base Octal
* 10 corresponde a base Decimal
* 16 corresponde a base Hexadecimal */

console.log(typeof media) //number é o tipo
console.log(typeof Number)// Number é a função.