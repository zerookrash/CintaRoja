// let myPenguin = {
//     character: "Tootsie the Penguin",
//     origin: "Donald Duck",
//     notes: "A baby Penguin in te classic 1939 cartoon "
// };

// console.log(`Hola, soy un pinguino y mi nombre es ${myPenguin.character}`);

// myPenguin.puedeVolar = false;

// console.log(myPenguin);

// myPenguin.graznar = function() {
//     console.log('kaww kaww!');
// }

// console.log(myPenguin.graznar());

// myPenguin.saludar = function() {
//     console.log(`¡Hola, soy un pingüino y mi nombre es ${this.character}!`);
// }

// myPenguin.saludar();

// myPenguin.character = "Penguin McPenguinFace";
// myPenguin.saludar();

// myPenguin.volar = function() {
//     if(this.puedeVolar) {
//         console.log("Puedo Volar");
//     } else {
//         console.log("No puedo volar :(");
//     }
// }

// console.log(myPenguin.volar());

// myPenguin.puedeVolar = true;

// myPenguin.volar();


// let receta = {
//     'titulo': 'Mole',
//     'porciones': 2,
//     'ingredientes': ['canela', 'comino', 'cocoa']
// };

// console.log(receta.titulo);

// let libros = [
//     {
//         titulo: 'Cien Años de Soledad',
//         autor: 'Gabriel García Márquez',
//         leido: true
//     },
//     {
//         titulo: 'Do Androids Dream of Electric Sheep',
//         autor: 'Phillip K. Dick',
//         leido: false
//     }
// ];

// for(let i = 0; i < libros.length; i++){
//     let libro = libros[i];
//     let libroInfo = libro.titulo + " por " + libro.autor;
//     if(libro.leido) {
//         console.log(`Ya has leìdo ${libroInfo}`);
//     } else {
//         console.log(`Aùn necesitas leer ${libroInfo}`);
//     }
// }

class Cuenta {
    constructor(titular, cantida) {
        this.titular = titular
        this.cantida = cantida
    }

    ingresar(cantidad){
        if(this.cantida + cantidad > 900) {
            return "Estas superando el limite de $900, Operacion cancelada"
        } else {
            this.cantida += cantidad;
            return `Operacion exitosa: Tu saldo es de ${this.cantida}`
        }
    }

    retirar(cantidad){
        if(this.cantida - cantidad < 10) {
            return "Notienes fondos suficites, Operacion cancelada";
        } else {
            this.cantida -= cantidad;
            return `Has retirado $ ${cantidad}. Tu saldo ahora es $ ${this.cantida}`;
        }
    }
}

let cuenta = new Cuenta("Mauricio Saavedra", 350);
console.log(cuenta.cantida);

console.log(cuenta.ingresar(400));
console.log(cuenta.retirar(400));
// console.log(cuenta.retirar(400));