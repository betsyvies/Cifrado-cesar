//Pedimos al usuario una frase para encriptarla
var sentence = prompt("Escriba una frase: ");
//Creamos una funcion, para Cifrar una frase
function cipher(sentence,n){
  //Almacenamos los newCodeAsciiOfLetterUp y newCodeAsciiOfLetterDown
  var arrayOfCodeAsciiLetter = [];
  //Hacemos un bucle para extraer los caracteres de la sentence
  for(i = 0; i < sentence.length; i++){
    //Extraemos una letter de la sentence de acuerdo a su posición
    var letter = sentence.charAt(i);
    //Verificamos si la letra es mayuscula o miniscula
    if(letter == letter.toUpperCase()){
      //Devuelve el Codigo ASCII de la letra mayuscula
      var codeAsciiOfLetterUp = letter.charCodeAt(0);
      //Aplicando la formula nos devuelve el nuevo código ASCII
      newCodeAsciiOfLetterUp = (codeAsciiOfLetterUp - 65 + n) % 26 + 65;
      /*Aplicando el metodo push introducimos los valores de
      newCodeAsciiOfLetterUp en arrayOfCodeAsciiLetter*/
      arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterUp);
    }
    else {
      //Devuelve el Codigo ASCII de la letra minuscula
      var codeAsciiOfLetterDown = letter.charCodeAt(0);
      //Aplicando la formula nos devuelve el nuevo código ASCII
      newCodeAsciiOfLetterDown = (codeAsciiOfLetterDown - 97 + n) % 26 + 97;
      /*Aplicando el metodo push introducimos los valores de
      newCodeAsciiOfLetterDown en arrayOfCodeAsciiLetter*/
      arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterDown);
    }
  }
  //Invertimos la posición del array para un buen orden en newSentence
  var reversArray = arrayOfCodeAsciiLetter.reverse();
  //Declaramos newSentence vacio, para que tome los valores de la concatenación
  var newSentence = " ";
  //Hacemos el bucle, para extraer los codigos ASCII que estan en el index de reversArray
  for(b = 0; b < reversArray.length; b++){
    //Devuelve la letra que se encuentra en el nuevo codigo ASCII
    var newLetter = String.fromCharCode(reversArray[b]);
    //Concatena las letras
    var newSentence = newLetter.concat(newSentence);
  }
  //Mostramos al usuario la frase incriptada mediante una alert
  return alert("La frase incriptada seria: " + newSentence);
}
//llamamos a la fución
cipher(sentence, 33);
/* Pedimos al usuario mediante un prompt que escriba una frase incriptada*/
var sentenceCipher = prompt("Introduce la frase que quieras decifrar: ")
//Creamos una funcion para decifrar la frase
function decipher(sentenceCipher,n){
  // Declaramos una variable de tipo array que contendra los valores del ASCII
  var arrayOfCodeAsciiLetterCipher = [];
  //Haremos un bucle para extraer los caracteres de la sentenciaCipher
  for(i = 0; i < sentenceCipher.length; i++){
    //Usando charAt obtendremos las letras de sentenceCipher
    var letterCipher = sentenceCipher.charAt(i);
    //Evaluamos si la letra es mayuscula o minuscula
    if(letterCipher == letterCipher.toUpperCase){
      //Con charCodeAt obtenemos el codigo ASCII de letterCipher
      var codeAsciiOfLetterCipherUp = letterCipher.charCodeAt(i);
      //Con esta formula obtendremos el codigo de la letra a decifrar
      newCodeAsciiOfLetterCipherUp = ((((codeAsciiOfLetterCipherUp + 65) - n) % 26) + 65);
      //Introduciremos los valores de newCodeAsciiOfLetterCipherUp al array
      arrayOfCodeAsciiLetterCipher.push(newCodeAsciiOfLetterCipherUp);
    }
    else {
      //Con charCodeAt obtenemos el codigo ASCII de letterCipher
      var codeAsciiOfLetterCipherDown = letterCipher.charCodeAt(i);
      //Con esta formula obtendremos el codigo de la letra a decifrar
      newCodeAsciiOfLetterCipherDown = ((((codeAsciiOfLetterCipherDown + 97) - n) % 26) + 97);
      //Introduciremos los valores de newCodeAsciiOfLetterCipherDown al array
      arrayOfCodeAsciiLetterCipher.push(newCodeAsciiOfLetterCipherDown);
    }
  }
  //Invertimos la posición del array para un buen orden en newSentenceDecipher
  var reversArrayCipher = arrayOfCodeAsciiLetterCipher.reverse();
  //Declaramos newSentence vacio, para que tome los valores de la concatenación
  var newSentenceDecipher = " ";
  //Hacemos el bucle, para extraer los codigos ASCII que estan en el index de reversArray
  for(a = 0; a < reversArrayCipher.length; a++){
    //Devuelve la letra que se encuentra en el nuevo codigo ASCII
    var newLetterDecipher = String.fromCharCode(reversArrayCipher[a]);
    //Concatena las letras
    var newSentenceDecipher = newLetterDecipher.concat(newSentenceDecipher);
    console.log(newSentenceDecipher);
  }
  //Mostramos al usuario la frase incriptada mediante una alert
  return alert("La frase decifrada seria: " + newSentenceDecipher);
}
//llamamos a la fución
decipher(sentenceCipher, 33);
