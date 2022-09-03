
const inputTexto = document.querySelector(".input-Texto");
var mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
mensaje.value = encriptar(inputTexto.value )
inputTexto.value = ''

document.style.backgroundImage = "none"

}

function encriptar(textoCriptografado){
 let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"]]
  textoCriptografado = textoCriptografado.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++){
    if(textoCriptografado.includes(matrizCodigo[i][0])){
    
   textoCriptografado = textoCriptografado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
   }
}
return textoCriptografado;
}


function btnDesencriptar(){
  inputTexto.value = desEncriptar(mensaje.value) 

  mensaje.value ="";
   }

function desEncriptar(textoEncriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"]]
  textoEncriptado = textoEncriptado.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(textoEncriptado.includes(matrizCodigo[i][1])){
    
      textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
   }
}
return textoEncriptado;

}   

