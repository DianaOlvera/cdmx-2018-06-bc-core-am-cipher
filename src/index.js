let string=document.getElementById("entrada");// llamo frase de usuario
let offset=document.getElementById("offset");// llamo los saltos
let buttonEncode=document.getElementById("button");

let string2 = document.getElementById("entrada2");
let buttonDecode=document.getElementById("button2");



buttonEncode.addEventListener("click", () => {
document.getElementById("resultado").innerHTML = window.cipher.encode( string.value, parseInt(offset.value));
}
),

buttonDecode.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = window.cipher.decode( string2.value, parseInt(offset.value));
}
)
