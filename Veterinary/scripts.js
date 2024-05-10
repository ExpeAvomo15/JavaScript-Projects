class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;

    }

    informacion(){
        return `${this.nombre} - ${this.peso}kg - ${this.edad} años`;
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre,peso,edad);
        this.raza = raza;
        
    }

    informacion(){
        return `${this.nombre} - ${this.peso}kg - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre,peso,edad);
        this.sexo = sexo;
       
    }
    informacion(){
        return `${this.nombre} - ${this.peso}kg - ${this.edad} años - ${this.sexo}`;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre,peso,edad);
        this.color = color;
        
    }

    informacion(){
        return `${this.nombre} - ${this.peso}kg - ${this.edad} años - ${this.color}`;
    }
}



let perro = new Perro ("Lobo", 20, 2, "Bool dog");
let gato = new Gato ("Sebas", 7, 5, "macho");
let conejo = new Conejo("Robbit", 4, 3, "rojo");

let animales = [perro, gato, conejo];

function mostrarAnimales(){
    let elementoLu = document.getElementById("listar");
    for (let animal of animales ){
        let elementoLi = document.createElement("li");
        elementoLi.textContent = animal.informacion();
        elementoLu.appendChild(elementoLi);
    }
}