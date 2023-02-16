// Import JavaScript
import generateJoke from "./javascript/generateJoke";

// Import SCSS
import "./styles/main.scss";

// Import Assets / Images ...
import laughingCry from "./assets/Laugh Cry Emoji.png";

// Check Setup Connection
console.log("Connected Webpack Server");

// Assign Image Source for <img> in DOM
const laughImg = document.getElementById("laughImg");
laughImg.src = laughingCry;

// Fetch jokeBtn from DOM and Add "click" Event to Generate Joke
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

// Call "generateJoke()" to Get the First Joke
generateJoke();
