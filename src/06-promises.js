//promises. se puede complementar con el curso de asincronismo
const anotherfunction = ( ) =>{
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Funciona, muestro la rama True')
        } else {
            reject('No funciona, muestro la rama False')
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))