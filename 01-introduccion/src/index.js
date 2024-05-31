let nombre = `Cristel`;

console.log(`Hola ${nombre}`)


// Arrow functions
const getUser = ( nombre ) => ({
    'uid' : '1234',
    'name' : nombre
})

console.log(getUser('Cristel'))