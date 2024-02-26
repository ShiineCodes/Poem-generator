function displayPoem(response) {
  console.log('poem generatated');
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector('#user-instructions');
  let apiKey = 'ae63c68o63edf4f3ea2cdt33d209b8b5';
  let prompt = `User instructions:Generetade a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and you love to write short poems. Your mission is to generate a 4 line poem in basic HTML and sepererate each line with a <br/>. Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context={context}&key=${apiKey}`;

  console.log('Generating poem');
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
