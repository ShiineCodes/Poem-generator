function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: " Jewel in the sky Lit me up As you're lit up In the sky The glow in",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);