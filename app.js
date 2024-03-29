let numeroSecreto = 0;
let numeroUsuario = 0;
let intentos = 0;
const maximosIntentos = 3;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  numeroUsuario = parseInt(document.getElementById("numero-usuario").value);
  
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    habilitarNuevoJuego();
    deshabilitarIntentar();
  } else {
      if (numeroUsuario > numeroSecreto) {
          asignarTextoElemento("p","El número secreto es menor");
      } else {
          asignarTextoElemento("p","El número secreto es mayor");
      }
      intentos++;
      limpiarCaja();

  if (intentos > maximosIntentos) {
    asignarTextoElemento("p", `Llegaste al número máximo de ${maximosIntentos} intentos`);
    deshabilitarIntentar();
    habilitarNuevoJuego();
    }
  } return
}

function condicionesIniciales() {
  asignarTextoElemento("legend","Indica un número del 1 al 100");
  generarNumeroSecreto();
  intentos = 1;
}

function generarNumeroSecreto() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  console.log(numeroSecreto);
}

function deshabilitarIntentar() {
  document.getElementById("intentar").setAttribute("disabled","true");
}

function habilitarNuevoJuego() {
  document.getElementById("nuevo-juego").removeAttribute("disabled");
}

function limpiarCaja() {
  document.getElementById("numero-usuario").value = "";
}


function reiniciarJuego() {
  limpiarCaja();
  asignarTextoElemento("p","");
  condicionesIniciales();
  document.getElementById("nuevo-juego").setAttribute("disabled","true");
  document.getElementById("intentar").removeAttribute("disabled");
}


function limitarInputMax100(event) {
  // Obtener el valor actual del input
  let currentValue = parseInt(event.target.value + event.key);
  
  // Verificar si el valor supera 100
  if (currentValue > 100) {
    // Prevenir la acción por defecto del evento
    event.preventDefault();
    // Mostrar un mensaje de advertencia o realizar otra acción según sea necesario
    asignarTextoElemento("p","Por favor, ingresa un número menor o igual a 100.");
    deshabilitarIntentar();
    habilitarNuevoJuego()
  }
}

addEventListener("keydown", limitarInputMax100);

condicionesIniciales();