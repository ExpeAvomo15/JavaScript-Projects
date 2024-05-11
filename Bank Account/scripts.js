
function getData (){

let datosJson;
fetch('resumen.json').then(res => res.json())
.then((salida) => {
    datosJson=salida;

    let eBanco = document.getElementById('banco');
    let eSucursal = document.getElementById('sucursal');
    let eTitular = document.getElementById('titular');
    let eNumCuenta = document.getElementById('numCuenta');
    let eSaldoUsd = document.getElementById('usd');
    let eSaldoEur = document.getElementById('eur');
    let eCbu = document.getElementById('cbu');
    let eAbierto = document.getElementById('abierto');

    

        eBanco.textContent = datosJson.banco;
        eSucursal.textContent = datosJson.sucursal;
        eTitular.textContent = datosJson.titular;
        eNumCuenta.textContent = datosJson.nro_cuenta
        eSaldoUsd.textContent = datosJson.saldo[0].monto+ " "+datosJson.saldo[0].moneda;
        eSaldoEur.textContent = datosJson.saldo[1].monto+" "+datosJson.saldo[1].moneda;

        eCbu.textContent = datosJson.cbu;
        eAbierto.textContent = datosJson.abierto;

    

  

})
.catch (function (e) {
    alert(e);
})
}