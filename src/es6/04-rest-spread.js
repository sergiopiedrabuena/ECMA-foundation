//La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

// arrays destructuring:
let fruits = ['Apple', 'Banana']
//multiple asignacion de variables
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

//Object destructuring
let user = {username:'Oscar', age: 34}
let {username, age} = user;
console.log(username,age);
console.log(username,user.age);

//parameters function destructuring
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}
mostrarDatos(usuario) // 'Andres', 23, 'Platzi'

//desestructuracion para valores retronados de una funcion.
function useState(value){
    return [value, updateValue()]
}
//Sin desestructuración 
    //const estado = useState(3)
    //const valor = estado[0]
    //const actualizador = estado[1]
//Con desestructuración 
const [valor, actualizador] = useState(3)


//spread operator
let person = {name:'oscar', age:28}
let country = 'MX';

let data = { id:1,...person, country };
console.log(data)

//rest
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1,1,2,3);
