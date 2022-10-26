//Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre.

//antes
//const nombre = "Andres"
//const edad = 23
//const objeto = {
//    nombre: nombre, 
//    edad: edad
//}
//objeto

//ahora
const nombre = "Andres"
const edad = 23
const objeto = {nombre, edad}
objeto // { nombre: 'Andres', edad: 23 }

//function
function newUser(user,age, country){
    return{
        user,
        age,
        country
    }
}
console.log(newUser('serghip',27,'ARG'))