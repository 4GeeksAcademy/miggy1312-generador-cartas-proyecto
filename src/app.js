import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  
  let indicePalo = Math.floor(Math.random() * palos.length);
  let indiceNumero = Math.floor(Math.random() * numeros.length);

  
  let paloFinal = palos[indicePalo];
  let numeroFinal = numeros[indiceNumero];

  
  let topElement = document.querySelector("#top-suit");
  let numberElement = document.querySelector("#card-value");
  let bottomElement = document.querySelector("#bottom-suit");
  let carta = document.querySelector("#cartaPoker")
  
  let colorClass = (paloFinal === "♥" || paloFinal === "♦") ? "text-danger" : "text-dark";

  
  topElement.innerHTML = paloFinal;
  numberElement.innerHTML = numeroFinal;
  bottomElement.innerHTML = paloFinal;

  
  topElement.className = `fs-1 text-start ${colorClass}`;
  numberElement.classList.add(colorClass); 
  bottomElement.className = `fs-1 text-start ${colorClass}`;

  carta.classList.remove("anim-girar");
  
  void carta.offsetWidth;
  
  carta.classList.add("anim-girar");
};
