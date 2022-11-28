/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"];
let images = ["♦", "♥", "♠", "♣"];
let variable_values = 0;
let variables_images = 0;

window.onload = function() {
  //write your code here

  variable_values = [Math.floor(Math.random() * values.length)];
  variables_images = [Math.floor(Math.random() * images.length)];

  let header = document.querySelector("#header");
  let center = document.querySelector("#center");
  let footer = document.querySelector("#footer");

  header.innerHTML = images[variables_images];
  center.innerHTML = values[variable_values];
  footer.innerHTML = images[variables_images];
};

onload();

// let cartas = ["A", 2, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// let simbolos = ["♦", "♥", "♠", "♣"];

// window.onload = function() {
//   //write your code here

//   let cartasRandom = Math.floor(Math.random() * cartas.lenght); // OJO: acá lo que hacemos es generar el número aleatorio de las Cartas.
//   //console.log(cartas[cartasRandom]); // OJO: acá lo que hacemos es llamar al array cartas en la posición cardRandom.

//   let simbolosRandom = Math.floor(Math.random() * simbolos.lenght); // OJO: acá lo que hacemos es generar el número aleatorio de los símbolos.
//   //console.log(simbolos[simbolosRandom]); // OJO: acá lo que hacemos es llamar al array simbolos en la posición simbolosRandom.

//   let header = document.querySelector("#header");
//   header.innerHTML = simbolos[simbolosRandom];
// };

const suit = ["♦", "♥", "♠", "♣"];

const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = () => {
  let randomSuit = Math.floor(Math.random() * suit.length); // OJO: acá lo que hacemos es generar el número aleatorio de los símbolos.
  console.log(suit[randomSuit]); // OJO: acá lo que hacemos es llamar al array suit (simbolos) en la posición randomSuit.

  let randomNumber = Math.floor(Math.random() * number.length); // OJO: acá lo que hacemos es generar el número aleatorio de las Cartas.
  console.log(number[randomNumber]); // OJO: acá lo que hacemos es llamar al array number en la posición randomNumber.

  let colors =
    suit[randomSuit] === "♠" || suit[randomSuit] === "♣" ? "black" : "red"; // OJO: acá lo que hacemos es un ternario para asignar los colores de los símbolos, si son ♠ ó ♣ van negros y los demás van rojos

  document.getElementById("addSuit1").style.color = colors; // OJO: acá lo que hacemos es tomar la variable colors y aplicar el color al elemento addSuit1 (que es el número superior de la carta)

  document.getElementById("addSuit2").style.color = colors; // OJO: acá lo que hacemos es tomar la variable colors y aplicar el color al elemento addSuit2 (que es el número inferior de la carta)

  let suit1 = document.querySelector("#addSuit1"); // OJO: acá lo que hacemos es definir la variable para el símbolo superior de la carta
  suit1.innerHTML = suit[randomSuit]; // OJO: acá lo que hacemos es llamar por innerHTML a suit1 y le asignamos el resultado random de suit

  let suit2 = document.querySelector("#addSuit2"); // OJO: acá lo que hacemos es definir la variable para el símbolo inferior de la carta
  suit2.innerHTML = suit[randomSuit]; // OJO: acá lo que hacemos es llamar por innerHTML a suit2 y le asignamos el resultado random de suit

  let number1 = document.querySelector("#addNumber"); // OJO: acá lo que hacemos es definir la variable para el centro de la carta (el número)
  number1.innerHTML = number[randomNumber]; // OJO: acá lo que hacemos es llamar por innerHTML a number1 y le asignamos el resultado random de number
};

onload();
