
buttonStart.addEventListener('click', () =>{


  document.getElementById("Empieza").style.display = "none";
});


let string=document.getElementById("entrada");// llamo frase de usuario
let offset=document.getElementById("offset");// llamo los saltos
let buttonEncode=document.getElementById("button");

let string2 = document.getElementById("entrada2");
let buttonDecode=document.getElementById("button2");





buttonEncode.addEventListener("click", () => {
document.getElementById("resultado").innerHTML = window.cipher.encode( parseInt(offset.value), string.value);
}
),

buttonDecode.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = window.cipher.decode( parseInt(offset.value), string2.value);
}
)
