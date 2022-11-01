//casos en los que se acceda a un elemento de objeto que no exista o este undefined
const users={
    serghi :{
        country: 'ARG'
    },
    ana :{
        country: 'CO'
    }
}

//console.log(users.bebeloper.country);
console.log(users?.bebeloper?.country);