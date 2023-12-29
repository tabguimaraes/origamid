function newFact() {
  const btn = document.querySelector("#btn");
  const randomFacts = `https://api.chucknorris.io/jokes/random`;
  const joke = document.querySelector("#joke");
  btn.addEventListener("click", () => {
    fetch(randomFacts).then(async (response) => {
      const response_1 = await response.json();
      joke.innerText = response_1.value;
      joke.style["opacity"] = "1";
    });
  });
}

newFact();
