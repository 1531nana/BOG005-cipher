// import cipher from './cipher.js';
// // let offset = document.getElementById("desplazamiento");
// let btnMensajeACifrar = document.getElementById("enviar_cifrado");
// // let mensajeACifrar = document.getElementById("cifrar").value;
// let btnMensajeADescifrar = document.getElementById("enviar_descifrado");
// // let mensajeADescifrar = document.getElementById("descifrar").value;


// //botón que muestra el mensaje cifrado al ser llamado
// btnMensajeACifrar.addEventListener("click", cifrar);
// function cifrar(){
//     let mensajeACifrar = document.getElementById("cifrar").value;
//     let offset = document.getElementById("desplazamiento");
//       // let offset = parseInt(offsetString.value);
//     // offset.value = Number(offset.value);
//     let resultadoCifrar = cipher.encode(offset, mensajeACifrar);
//     console.log(cipher.encode(offset, mensajeACifrar));
//    if(offset && mensajeACifrar){
//        document.write("Su mensaje cifrado es: "+resultadoCifrar);
//    } 

// }
// //botón para descifrar el mensaje
// btnMensajeADescifrar.addEventListener("click", descifrar);
// function descifrar (){
// let offset = document.getElementById("desplazamiento");
// let mensajeADescifrar = document.getElementById("descifrar").value;
// let resultadoDescifrar = cipher.decode(offset, mensajeADescifrar);
// if(offset && mensajeADescifrar){
//     document.write("su mensaje descifrado es: " + resultadoDescifrar);
// }
// }


//---------------------------------
//--------------------------------


import cipher from './cipher.js';
// let offset = document.getElementById("desplazamiento");
let btnMensajeACifrar = document.getElementById("enviar_cifrado");
// let mensajeACifrar = document.getElementById("cifrar").value;
let btnMensajeADescifrar = document.getElementById("enviar_descifrado");
// let mensajeADescifrar = document.getElementById("descifrar").value;
// let resultadoUsuario = document.getElementById("caja_resultado");
// let resultadoUsuario;

//botón que muestra el mensaje cifrado al ser llamado
btnMensajeACifrar.addEventListener("click", cifrar);
function cifrar(){
    let mensajeACifrar = document.getElementById("cifrar").value;
    let offset = document.getElementById("desplazamiento").value;
    let resultadoCifrar = cipher.encode(offset, mensajeACifrar);
    console.log(cipher.encode(offset, mensajeACifrar));
    // function mostrarResultado (){
    // document.getElementById("caja_resultado").value;
        if(offset && mensajeACifrar){
    document.getElementById("caja_resultado").value = "su mensaje cifrado es: "+resultadoCifrar;
        //     resultadoUsuario.value +=  resultadoCifrar;
        //  console.log("su mensaje cifrado es: "+resultadoUsuario);
        } 
    }

// }
//botón para descifrar el mensaje
btnMensajeADescifrar.addEventListener("click", descifrar);
function descifrar (){
let offset = document.getElementById("desplazamiento").value;
let mensajeADescifrar = document.getElementById("descifrar").value;
// let resultadoUsuario = document.getElementById("caja_resultado");
let resultadoDescifrar = cipher.decode(offset, mensajeADescifrar);
if(offset && mensajeADescifrar){
    document.getElementById("caja_resultado").value = "su mensaje descifrado es: "+ resultadoDescifrar;
}
}