// Import API Axios for Dad's Joke
import axios from "axios";

function generateJoke() {
  // Set AxiosHeaders "content-type" as "application/json"
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
    // More Details of API Axios in Browser's Console
    console.log(res);
  });
}

// Export generateJoke() Function to "index.js"
export default generateJoke;
