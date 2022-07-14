// const cipher = {
//   // ...
// };

// export default cipher;
const cipher = {
  encode: function (offset, mensajeACifrar){
    let resul = "";
    if(offset){
      //retorna la cadena de caracteres en un constructor
      mensajeACifrar = new String(cifrar.value.toUpperCase());
      console.log(mensajeACifrar);
      //bucle para recorrer toda la cadena de caracteres (mensaje a cifrar)
      for(let i = 0; i < mensajeACifrar.length; i++){
        //método para que muestre el código ASCII de la letra
        let resultado = mensajeACifrar.charCodeAt([i]);
        console.log(resultado);
        // variable que muestra en código ASCII, el nuevo código con el desplazamiento que el usuario indicó
        let formula = (parseInt(resultado)- 65 + parseInt(desplazamiento.value))%26+65;
        console.log(formula);
        //muestra la letra respecto al código ASCII
        let mensajeYaCifrado = String.fromCharCode([formula]);
        resul += mensajeYaCifrado;
      }
      alert("su mensaje cifrado es: "+resul);
      return(resul);
    }
  },


  decode: function(offset, mensajeADescifrar){
    
  }
};



export default cipher;