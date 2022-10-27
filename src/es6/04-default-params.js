// Asignacion mediante operador OR = || alt+124
function newUser ( name, age, country){
    var name = name || 'Serghi';
    var age =age || 34;
    var country = country || 'Arg';
    console.log(name,age,country);
}
newUser();
newUser('Pepe', 21, 'MAR');

//Asignacion mediante parametros
function newAdmin(name = 'Oscar', age=32, country='CL'){
    console.log(name,age,country);
}
newAdmin();
newAdmin('Ana', 28,'PE');