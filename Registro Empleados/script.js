//Declaramos un array vacio de empleados
let empleados = [];

//Creamos el connstructor de Empleado
function Empleado (legaje, nombre, apellido, fechaNacimiento, cargo){
    this.legaje = legaje;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}

function agregarEmpleado(){
    //Tomamos los valores de los input que pasaremos al objeto empleado
    let legaje = document.getElementById("legaje").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let cargo = document.getElementById("cargo").value;

    // creamos el objeto empleado con los datos extraidos previamente
    let empleado = new Empleado (legaje, nombre, apellido, fechaNacimiento, cargo);

    //Añadimos empleado al array
    empleados.push(empleado);

    alert("El empleado ha sido agregado");
    limpiarCampos();

}


function listarEmpleados(){
    let listado='';
    for (let empleado of empleados){
        for (let prop in empleado){
            listado +=  `${prop.toLocaleUpperCase()}: ${empleado[prop]}, `;
        }
        listado += "\n";
    }
    alert(listado);
    
}

function limpiarCampos(){
    document.getElementById("legaje").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("fechaNacimiento").value = '';
    document.getElementById("cargo").value = '';
}

