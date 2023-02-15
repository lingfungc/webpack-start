import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughingCry from "./assets/Laugh Cry Emoji.png";

console.log("Connected Webpack Server");

const laughImg = document.getElementById("laughImg");
laughImg.src = laughingCry;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
