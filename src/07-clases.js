//declaracion de clases
class user{
    //methods
    greeting(){
        return 'Accediendo a metodo greeting'
    }
};
//declaracion de instancia a clase
const myClass = new user();
//acceso a metodo de la clase instanciada
console.log(myClass.greeting());

//other example
const otherClass = new user();
console.log(otherClass.greeting());

//--
//constructor
class user{
    constructor() {
        console.log('Nueva instancia, inicializacion de variables')
    }
    //methods
    greeting(){
        return 'Accediendo a metodo greeting'
    }
};
//al instanciar la clase, se hace llamada a constructor
const serghi = new user();

//--
//uso de this. get and set
class user {
    //constr
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    //meth
    speak() {
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.name = n;
    }
}
const pepe = new user('pepe', 145);
console.log(pepe.greeting());
console.log('edad instanciada: ' + (pepe.uAge));
console.log('nueva edad mediante set: ' + (pepe.uAge = 15));