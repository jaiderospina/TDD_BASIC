// test-0.js
// Ejemplo de un test automatizado en javascript. Primer caso falla!. Es lo esperado!!!

const resultado = 2
const esperado = 2

if ( resultado !== esperado ) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` )
}

console.log( '¡Todo OK! 👌' )