var txt = "No digo nada"; //declaro esta variable de forma global, se utiliza var y no let

function nombre(x){ //Creo una función y le paso un parámetro

  if(x.length > 5){//en este caso es una cadena, y valido si es mayor a 5
    
    txt = 'El nombre tiene más de 5 letras'; // Le asigno un nuevo mensaje en caso de que se cumpla esta condición
  
  }else{
  
    txt = 'El nombre tiene menos de 5 letras'; //En caso de que no le asigno este mensaje
  }

}

console.log(txt); //Mando un console log, para que mires como imprimi mi variable global
nombre('Rogelio');//Pasamos un nombre
console.log(txt);//Después de que se ejecuta la función el valor de txt cambia dependiendo la condición, en este caso te dirá que el nombre tiene más de 5 letras

nombre('Alan');//Una vez más llamas la función y le pasas otro parámetro ahora un nombre con 4 letras
console.log(txt);//ahora el valor de txt es un mensaje que dice que el nombre tiene menos de 5 letras.