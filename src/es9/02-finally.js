//promises. se puede complementar con el curso de asincronismo
const anotherfunction = ( ) =>{
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Funciona, muestro la rama True;resolve')
        } else {
            reject('No funciona, muestro la rama False;reject')
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Fin de la promesa'));