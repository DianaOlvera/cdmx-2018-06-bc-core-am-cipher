window.cipher = {

  encode:(offset, string) => { // FUNCION CIFRAR
    let resultado =""; //  es para que concatene toda la frase y se muestre en DOM



    for (i=0; i<string.length; i++){// inicializa en 0 el recorrido de la frase
      let cadenas = string.charCodeAt(i);//convierte las letras de la frase en posicion ascii
      if(cadenas >= 65 && cadenas <= 90){// para mayusculas ascii
        resultado += String.fromCharCode((cadenas -65 + offset) % 26 + 65); //se convierte las posiciones en letras
      }else if(cadenas >= 97 && cadenas <= 122){
        resultado += String.fromCharCode((cadenas -97 + offset) % 26 + 97 );
      }else if(cadenas >= 32 && cadenas <= 64   || cadenas >= 91 && cadenas <= 96 || cadenas >= 123 && cadenas <= 126){
        resultado+=String.fromCharCode(cadenas);

      }
    }
      return resultado;
  },


  decode :(offset, string2) => { // FUNCION DESCIFRAR
    let resultado=" ";


    for (i = 0; i < string2.length; i++){// inicializa en 0 el recorrido de la frase
      let cadenas = string2.charCodeAt(i);//convierte las letras de la frase en posicion ascii
      if(cadenas >= 65 && cadenas <= 90){// para mayusculas ascii
        resultado += String.fromCharCode((cadenas -90 - offset) %26 + 90);// se convierte las posiciones en letras
      }else if(cadenas >=97 && cadenas <=122){// para minusculas
        resultado += String.fromCharCode((cadenas -122 - offset) %26 + 122 );
      }else if(cadenas >=32 && cadenas <=64   || cadenas >= 91 && cadenas <= 96 || cadenas >= 123 && cadenas <=126){
        resultado += String.fromCharCode(cadenas);
     }
    }
      return resultado;
    }
  };

  start:() => {

}
