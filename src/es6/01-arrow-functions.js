//function 
function square(num) {
    return num* num;
}
//Arrow function; Se recomienda que las funciones flecha sean declaradas con CONST
const square = num =>{
    return num*num;
}

const square = (num1,num2) => num1 * num2 ;
console.log(square(2,3));