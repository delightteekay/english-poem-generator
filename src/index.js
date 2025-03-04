function displayPoem(response) {
new Typewriter('#poem', {
strings: response.data.answer,
autoStart: true,
delay: 1,
cursor: "",
});

}


function generatePoem(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "td08be15cf102abbf4da48f50db4e34o";
let prompt = `Generate a english poem about ${instructionsInput.value}`;
let context = "";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);