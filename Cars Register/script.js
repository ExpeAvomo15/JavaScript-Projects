function Automovil (marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}


let car1 = new Automovil("Toyota", "Cambri", "rojo",2004,"Avomo");
let car2 = new Automovil("Avensis", "V8", "negro",2013,"Lemonate");
let car3 = new Automovil("Carina", "E", "azul",2002,"Obama");

let cars = [car1, car2, car3];


Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.verAuto = function(){
    
    return `${this.marca}-${this.modelo}-${this.color}-${this.anio}-${this.titular}`;
}

Automovil.prototype.encender = function () {
    alert("El coche está en marcha");
}

function mostrarRegistro(){
    let elementoUl = document.getElementById("lista");
    for (let car of cars){
        let elementoLi = document.createElement("li");
        elementoLi.textContent = car.verAuto();
        elementoUl.appendChild(elementoLi);
    }
}