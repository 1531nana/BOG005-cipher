const cipher = {
  //función para codificar el mensaje
  encode: function (offset, mensajeACifrar){
    let resul = "";
    //condicionales para validar la información necesaria
    if(offset == undefined && mensajeACifrar == undefined){
      throw new TypeError();
    }
    if(offset == 0 || mensajeACifrar == 0 ){
      throw new TypeError();
    }  
    if(offset == null && mensajeACifrar == []){
      throw new TypeError();
    }  
    if (offset == 0 && mensajeACifrar == 0){
      throw new TypeError();
    }
   
    if(offset){
      //retorna la cadena de caracteres en un constructor
      mensajeACifrar = new String(mensajeACifrar.toUpperCase());
      console.log(mensajeACifrar);
      console.log("offset = " + offset);
      //bucle para recorrer toda la cadena de caracteres (mensaje a mensajeACifrar)
      let espacioBlanco;
      for(let i = 0; i < mensajeACifrar.length; i++){
       
        // if(mensajeACifrar[i] == " "){
        //   espacioBlanco = mensajeACifrar.charCodeAt(32);
        //   espacioBlanco = String.fromCharCode(32);
        //   // return espacioBlanco;
        // }
        // console.log("esto es un espacio en blanco" + espacioBlanco);
      //método para que muestre el código ASCII de la letra
      if(mensajeACifrar[i] !== " "){
        let resultado = mensajeACifrar.charCodeAt([i]);
        console.log("código ASCII "+resultado);
        // variable que muestra en código ASCII, el nuevo código con el offset que el usuario indicó
        let formula = (resultado - 65 + parseInt(offset)) % 26 + 65;
        console.log("el resultado de la resta "+ formula);
        //muestra la letra respecto al código ASCII
        let mensajeYaCifrado = String.fromCharCode([formula]);
        resul += mensajeYaCifrado;
      } else  if(mensajeACifrar[i] == " "){
        espacioBlanco = mensajeACifrar.charCodeAt(32);
        espacioBlanco = String.fromCharCode(32);
       resul += espacioBlanco;
      }
      
      }
      console.log(resul); 
      return resul;
    }
  },

//función para decodificar el mensaje 
  decode: function(offset, mensajeADescifrar){
    let resul1 = "";
    // condicionales para validar la información necesaria
    if(offset == undefined && mensajeADescifrar == undefined){
      throw new TypeError();
    }
     if(offset == 0 || mensajeADescifrar == 0){
      throw new TypeError();
    } 
    if(offset == null && mensajeADescifrar == []){
      throw new TypeError();
    } 
     if(offset == 0 && mensajeADescifrar == 0){
      throw TypeError();
    } 
      if(offset){
        let espacioBlanco1;
        // variable que va a pasar a un constructor el mensaje
      mensajeADescifrar = new String(mensajeADescifrar.toUpperCase());
      console.log(mensajeADescifrar);
      // ciclo para iterar por cada caracter del mensaje
      for(let i = 0; i < mensajeADescifrar.length; i++){
        if(mensajeADescifrar[i] !== " "){
          //variable que muestra la posición del caracter en el código ASCII
          let resultadoDescifrar = mensajeADescifrar.charCodeAt([i]);
          console.log(resultadoDescifrar);
          //variable que permite mostrar el código ASCII descifrado
          let resta = (resultadoDescifrar - 90 - parseInt(offset)) % 26 + 90;
          // variable que permite mostrar la letra descifrada, respecto al código ASCII
          let codigoDescifrado = String.fromCharCode([resta]);
          console.log(codigoDescifrado);
          resul1 += codigoDescifrado;
        } else if (mensajeADescifrar[i] === " "){
          espacioBlanco1 = mensajeADescifrar.charCodeAt(32);
          espacioBlanco1 = String.fromCharCode(32);
          resul1 += espacioBlanco1;
        }
      }
      return resul1;
    }
  
  }
};

export default cipher;