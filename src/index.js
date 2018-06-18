<<<<<<< HEAD

buttonStart.addEventListener('click', () =>{


  document.getElementById("Empieza").style.display = "none";
});


=======
>>>>>>> a7c3e3083ee8a88f95f1afb789073b948136b45b
let string=document.getElementById("entrada");// llamo frase de usuario
let offset=document.getElementById("offset");// llamo los saltos
let buttonEncode=document.getElementById("button");

let string2 = document.getElementById("entrada2");
let buttonDecode=document.getElementById("button2");



<<<<<<< HEAD


buttonEncode.addEventListener("click", () => {
document.getElementById("resultado").innerHTML = window.cipher.encode( parseInt(offset.value), string.value);
=======
buttonEncode.addEventListener("click", () => {
document.getElementById("cifrado").innerHTML = window.cipher.encode( string.value, parseInt(offset.value));
>>>>>>> a7c3e3083ee8a88f95f1afb789073b948136b45b
}
),

buttonDecode.addEventListener("click", () => {
<<<<<<< HEAD
  document.getElementById("resultado").innerHTML = window.cipher.decode( parseInt(offset.value), string2.value);
=======
  document.getElementById("descifrado").innerHTML = window.cipher.decode( string2.value, parseInt(offset.value));
>>>>>>> a7c3e3083ee8a88f95f1afb789073b948136b45b
}
)
