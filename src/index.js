// import cipher from './cipher.js';

// console.log(cipher);

import cipher from './cipher.js';
let offset = document.getElementById("desplazamiento");
let btnMensajeACifrar = document.getElementById("enviar_cifrado");
let mensajeACifrar = document.getElementById("cifrar").value;
let btnMensajeADescifrar = document.getElementById("enviar_descifrado");
let mensajeADescifrar = document.getElementById("descifrar").value;


//botón que muestra el mensaje cifrado al ser llamado
btnMensajeACifrar.addEventListener("click", cipher.encode);

//botón para descifrar el mensaje
btnMensajeADescifrar.addEventListener("click", cipher.decode);






// console.log(cipher.encode());