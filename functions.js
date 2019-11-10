let BASE_URL = "https://raw.githubusercontent.com/anilrayamajhi/padControllers/master/sounds/sounds";

let dict = {
  56:true,
  57:true,
  48:true,
  45:true,
  117:true,
  105:true,
  111:true,
  112:true
}

let pads = document.querySelectorAll('.key-pad')
console.log(pads)
for(let pad of pads){
  pad.classList.add('pulso')
  pad.addEventListener("click", onPress)  
} 

function onPress(e){ //LLAMADA CUANDO DOY CLIC
   e.target.classList.remove('pulso')
   e.target.classList.add('push')
   setTimeout(()=>{
    e.target.classList.remove('push')
   e.target.classList.add('pulso')
   },300)
  //find code
  let id = e.target.id
  
  let keyCode = id.split("-")[1];
  console.log(keyCode)
  var audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
}
function onPressNode(node){ //EFECTO CON LA LETRA
  node.classList.toggle('pulso')
   node.classList.toggle('push')
   setTimeout(()=>{
      node.classList.toggle('pulso')
   node.classList.toggle('push')
   },300)
  //find code
  let id = node.id
  
  let keyCode = id.split("-")[1];
  console.log(keyCode)
  var audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
}

//TAREA: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1.- Seleccionar el nodo
//2.- Agregamos el Listener
//3.- Funcion, algo que hará cuando apretemos tecla


// AQUI VA TU OBSERVADOR keypress
function onPressNodeUno(letra){
  var key = letra.keyCode; //se guarda a la variable "key" la tecla que se presionó
  
    if (dict[key]) {//Vé si la variable Key, se encuentra en el Array  
      console.log(key) //Imprime en consola el valor de key
      let cuadro = document.querySelector(`#pad-${key}`) //Se selecciona el nodo concatenando el valor de "key" a la clase "pad-"
      onPressNode(cuadro) //Se le pasa la variable de cuadro, como parametro a la funcion onPressNode
    }
    else {
      console.log("Hola_Y_Adios") //Si la tecla que ingresó NO se encuentra en el Array, se imprime "Hola_Y_Adios"
    }
}//onPressNodeUno

// AQUI VA TU FUNCION CALLBACK
document.addEventListener("keypress", onPressNodeUno) //Se agrega un evento EventListener, con "keypress" que es un evento que se ejecute cuando presiona una tecla, y para eso se va a la funcion "onPressNodeUno"
