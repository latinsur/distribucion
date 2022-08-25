var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var error = document.getElementById('error');
var cuit = document.getElementById('cuit');
var direccion = document.getElementById('direccion');
var provincia = document.getElementById('provincia');
var barrio = document.getElementById('barrio');
var telefono = document.getElementById('telefono');
var comercio = document.getElementById('comercio')
error.style.color = 'red';

function enviarFormulario(){

    console.log('Enviando formulario...');

    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingrese su nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingrese su apellido');
    }
    error.innerHTML =  mensajesError.join(',');
    return false;
}