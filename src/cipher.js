const cipher = {
  //función para codificar el mensaje
  encode: function (offset, mensajeACifrar){
    let resul = "";
    // console.log(offset, mensajeACifrar);
    //condicionales para validar la información necesaria
    if(offset.value !== Number){
      throw TypeError("debe ingresar un número");
    }
    if(offset.value == ""){
      throw TypeError(alert("Debe ingresar un número"));
    }
    if(offset.value == 0 ){
      throw TypeError(alert("Debe ingresar un número mayor a cero"));
    }  else if(mensajeACifrar == ""){
      throw TypeError(alert(alert("Debe ingresar un mensaje")));
    } else  if(offset.value < 0){
      throw TypeError(alert("Debe ingresar un número positivo"));
    }  else {
    if(offset){
      //retorna la cadena de caracteres en un constructor
      mensajeACifrar = new String(mensajeACifrar.toUpperCase());
      console.log(mensajeACifrar);
      //bucle para recorrer toda la cadena de caracteres (mensaje a mensajeACifrar)
      for(let i = 0; i < mensajeACifrar.length; i++){
        //método para que muestre el código ASCII de la letra
        let resultado = mensajeACifrar.charCodeAt([i]);
        console.log(resultado);
        // variable que muestra en código ASCII, el nuevo código con el offset que el usuario indicó
        let formula = (parseInt(resultado)- 65 + parseInt(offset.value))%26+65;
        console.log(formula);
        //muestra la letra respecto al código ASCII
        let mensajeYaCifrado = String.fromCharCode([formula]);
        resul += mensajeYaCifrado;
      }
      return(resul);
    }
  }
  },

//función para decodificar el mensaje 
  decode: function(offset, mensajeADescifrar){
    let resul1 = "";
    // condicionales para validar la información necesaria
    if(offset.value !== Number){
      throw TypeError("debe ingresar un número");
    }
    if(offset.value == ""){
      throw TypeError(alert("Debe ingresar un número"));
    }
     if(offset.value == 0){
      throw TypeError(alert("Debe ingresar un número mayor a cero"));
    } else if(mensajeADescifrar == ""){
      throw TypeError(alert("Debe ingresar un mensaje"));
    } else  if(offset.value < 0){
      throw TypeError(alert("Debe ingresar un número positivo"));
    } else { 
      if(offset){
        // variable que va a pasar a un constructor el mensaje
      mensajeADescifrar = new String(mensajeADescifrar.toUpperCase());
      console.log(mensajeADescifrar);
      // ciclo para iterar por cada caracter del mensaje
      for(let i = 0; i < mensajeADescifrar.length; i++){
        //variable que muestra la posición del caracter en el código ASCII
        let resultadoDescifrar = mensajeADescifrar.charCodeAt([i]);
        console.log(resultadoDescifrar);
        //variable que permite mostrar el código ASCII descifrado
        let resta = resultadoDescifrar - offset.value;
        console.log(resta);
        // variable que permite mostrar la letra descifrada, respecto al código ASCII
        let codigoDescifrado = String.fromCharCode([resta]);
        resul1 += codigoDescifrado;
      }
      return(resul1);
    }
  }
  }
};



export default cipher;