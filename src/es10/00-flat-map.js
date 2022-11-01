//flat:nos devuelve una matriz de cualquier submatriz
const array = [1,1,2,4,5,[1,3,5,6, [1,2,4]],9]
//(3) indica la produndidad
console.log(array.flat(3))

//flat.map mapea cada uno de los elemenos usados y luego aplana el resultado
const array2 = [1,2,3,4,5];
//muestra el valor y luego el valor multiplicado por 2
console.log(array2.flatMap(v => [v, v * 2]));


