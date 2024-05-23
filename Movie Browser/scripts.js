//VARIABLES
let selector = document.getElementById('selector');
let input = document.getElementById('myInput');
let button  = document.getElementById('myButton');
let lista = document.getElementById('lista');

let archivo = 'peliculas.json';

//EVENT LISTENERS
selector.addEventListener('change', cambioArchivo);
selector.addEventListener('cambioDeArchivo', mostrarArchivo);
input.addEventListener('keydown', function(event){
    if (event.key !=8 && event.key !=32){
        if(event.key < 65 || event.key > 90){
            event.preventDefault();
        }
    }
});
button.addEventListener('click', buscar);

//FUNCTIONS
function cambioArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioDeArchivo');
    selector.dispatchEvent(evento);
}

function  mostrarArchivo(){
    alert("Ahora el archivo es "+selector.value);
}

function buscar(){
    lista.innerHTML = '';

    fetch(archivo)
    .then(res=>res.json())
    .then(function(salida){

        for (let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;

                let li = document.createElement('li');
                li.innerHTML = item.nombre;

                //EVENTOS DE LI
                li.addEventListener('mouseover', function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display =  'block';
                });
                
                li.addEventListener('mouseout', function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display =  'none';
                });

                li.appendChild(p);
                lista.appendChild(li);


            }
        }

    }).catch(function(error) {alert(error)});
}
