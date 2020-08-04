let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
// Só utiliza let quando for alterar a váriavel, priorizar constantes.

isAtivo = 1
console.log(!isAtivo) // Utilizar o !=NOT ou seja False
// Utilizar a ! 2x = true - console.log(!!isAtivo) = true

/*console.log('os verdadeiro...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

Tudo isso em JS resolve para valor TRUE*/

/*console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

Tudo isso em JS resolve para valores FALSE*/

console.log('Pra Finalizar...')
console.log(!!('' || null || '123' ))