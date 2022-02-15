import React from "react";
import ReactDOM from "react-dom";

import "./css/estilo.css";

import App from "./App";

// const elemento = <h1>Hola React!!</h1>;

const contenedor = document.querySelector("#root");

ReactDOM.render(<App />, contenedor);

//Desestructuracion de arreglos y objetos

// const pokemones = ["Pikachu", "Charizar", "Squirtle"];
// // console.log(pokemones[1]);

// const [poke1, poke2, poke3] = pokemones;

// console.log(poke3, poke2);

// const entrenador = {
//   nombre: "Ash Ketchum",
//   edad: 12,
//   pueblo: "Paleta",
//   region: "Kanto",
// };

// // console.log((entrenador.edad = 22));

// const { nombre: nombreEntrenador, edad, pueblo } = entrenador;

// console.log(nombreEntrenador, pueblo);

// //Arrow function - funciones de flecha------------------------

// const elegirPokemon = (opcion) => {
//   switch (opcion) {
//     case "1":
//       alert(`${poke1.toUpperCase()} yo te elijo!!`);
//       break;
//     case "2":
//       alert(`${poke2.toUpperCase()} yo te elijo!!`);
//       break;
//     case "3":
//       alert(`${poke3.toUpperCase()} yo te elijo!!`);
//       break;
//     default:
//       alert("Te faltan más pokemones, atrapalos ya!");
//       break;
//   }
// };

// // elegirPokemon(prompt("Elije una opción"));

// const saludarEntrenador = () =>
//   `Hola, soy ${nombreEntrenador} del pueblo ${pueblo}, tengo ${edad} años y me convertiré en el mejor entrenador pokemon`;

// // console.log(saludarEntrenador());

// const presentarMaestro = () => ({
//   nombre: nombreEntrenador,
//   edad: edad,
//   pueblo: pueblo,
// });

// // console.log(presentarMaestro());

// //Operador ternario---------------------------
// const pokebola = false;

// const evaluarPokebola = () => {
//   //   if (pokebola) {
//   //     return "Atrapaste un nuevo pokemon";
//   //   } else {
//   //     return "El pokemon se te escapó";
//   //   }

//   //   return pokebola ? "Atrapaste un nuevo pokemon" : "El pokemon se te escapó";
//   return pokebola && "Atrapaste un nuevo pokemon";
// };

// console.log(evaluarPokebola());
