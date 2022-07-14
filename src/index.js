import cipher from './cipher.js';
// let offset = document.getElementById("desplazamiento");
let btnMensajeACifrar = document.getElementById("enviar_cifrado");
// let mensajeACifrar = document.getElementById("cifrar").value;
let btnMensajeADescifrar = document.getElementById("enviar_descifrado");
// let mensajeADescifrar = document.getElementById("descifrar").value;


//botón que muestra el mensaje cifrado al ser llamado
btnMensajeACifrar.addEventListener("click", cifrar);
function cifrar(){
    let mensajeACifrar = document.getElementById("cifrar").value;
    let offset = document.getElementById("desplazamiento");
    let resultadoCifrar = cipher.encode(offset, mensajeACifrar);
    console.log(cipher.encode(offset, mensajeACifrar));
   if(offset && mensajeACifrar){
       document.write("Su mensaje cifrado es: "+resultadoCifrar);
   } 

}
//botón para descifrar el mensaje
btnMensajeADescifrar.addEventListener("click", descifrar);
function descifrar (){
let offset = document.getElementById("desplazamiento");
let mensajeADescifrar = document.getElementById("descifrar").value;
let resultadoDescifrar = cipher.decode(offset, mensajeADescifrar);
if(offset && mensajeADescifrar){
    document.write("su mensaje descifrado es: " + resultadoDescifrar);
}
}