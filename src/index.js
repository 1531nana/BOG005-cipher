import cipher from './cipher.js';

let btnMensajeACifrar = document.getElementById("enviar_cifrado");
let btnMensajeADescifrar = document.getElementById("enviar_descifrado");


//botón que muestra el mensaje cifrado al ser llamado
btnMensajeACifrar.addEventListener("click", cifrar);
// funcion que va a ser llamada al momento de el bot´ón escuche el evento
function cifrar(){
    let mensajeACifrar = document.getElementById("cifrar").value;
    let offset = document.getElementById("desplazamiento").value;
    let resultadoCifrar = cipher.encode(offset, mensajeACifrar);
// condicional que le va a mostrar el mensaje cifrado al usuario en el ínput de resultado
        if(offset && mensajeACifrar){
        document.getElementById("caja_resultado").value = "su mensaje cifrado es: "+resultadoCifrar;
        } 
    }

//botón para descifrar el mensaje
btnMensajeADescifrar.addEventListener("click", descifrar);
// funcion que va a ser llamada al momento de el bot´ón escuche el evento
function descifrar (){
let offset = document.getElementById("desplazamiento").value;
let mensajeADescifrar = document.getElementById("descifrar").value;
let resultadoDescifrar = cipher.decode(offset, mensajeADescifrar);
// condicional que le va a mostrar el mensaje descifrado al usuario en el ínput de resultado
    if(offset && mensajeADescifrar){
    document.getElementById("caja_resultado").value = "su mensaje descifrado es: "+ resultadoDescifrar;
    }
}