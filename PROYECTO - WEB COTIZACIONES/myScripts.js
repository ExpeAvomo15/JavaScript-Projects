
function inicio(){
    //funcion para obtener cotizaciones
    getCotizaciones(mostrarCotizacion);

    //funcion para los elemntos de titulo y logo
    tituloLogo()

    //funcion para cargar los textos
    cargarTextos()


}


async function getCotizaciones(callback){
   
    await fackeDely(3000);
    //FETCH
    let resrUsdEur = await fetch('https://open.er-api.com/v6/latest/USD');
    let usdEur = await resrUsdEur.json();
    document.getElementById('usdEur').append(usdEur.rates.EUR);

    //CALLBACKS
    let resArsUsd = await fetch('https://open.er-api.com/v6/latest/ARS');
    callback (await resArsUsd.json());

    //PROMESAS
    let data = await crearPedido('https://api.coindesk.com/v1/bpi/currentprice.json');
    document.getElementById('bitcoinUsd').append(data.bpi.USD.rate);

    document.getElementById('espera').style.visibility = 'hidden';

}

function mostrarCotizacion(data){
    document.getElementById('arsUsd').append(data.rates.USD);
}
async function crearPedido(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            } else{
                reject(xhr.statusText);
            }
        }
        xhr.send();

    });
}

function tituloLogo(){
    document.getElementById('titulo').textContent = 'Mis Cotizaciones';
    document.getElementById('logo').setAttribute('src','logo.jpg');
    document.getElementById('espera').setAttribute('src', 'loading.gif');
    //document.getElementById('espera').style.visibility = 'visible';
}

function cargarTextos(){
    document.getElementById('usdEur').append('USD to EUR ')
    document.getElementById('arsUsd').append('ARS to USD ')
    document.getElementById('bitcoinUsd').append('BITCOIN to USD ')
}

function fackeDely(ms){
    return new Promise(function(res){
        setTimeout(res,ms);
    });
}
