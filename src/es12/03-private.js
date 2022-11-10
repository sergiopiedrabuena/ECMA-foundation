class user {
    //constructor
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    //usas numeral para volverlo privado
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.name = n;
    }
}