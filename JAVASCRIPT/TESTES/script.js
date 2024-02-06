// const calculadora = document.querySelectorAll(".numeros");

// console.log(calculadora);

// h1Selecionado.classList.toggle("ativo");

// console.log(h1Selecionado.classList[0]);

// const formInput = document.querySelector(".calculadora input");

// const mostraNumero = [];
// calculadora.forEach((numeros, index) => {
//   numeros.addEventListener("click", () => {
//     let a, b, c;
//     let numeroAtual = Number(numeros.innerText);
//     mostraNumero.push(numeroAtual);

//     a = mostraNumero.some(index);
//     c = a + b;
//     numeroAtual += numeroAtual;
//     mostraNumero = Number(mostraNumero);
//     console.log(a);
//   });
// });

// ITERAR NO ARRAY COM FOREACH, SOMANDO O VALOR A CADA ITERAÇÃO.

// EX:

// let valorAtual;
// function somarValores() {
//   mostraNumero.forEach((item) => {
//     valorAtual = item;
//     valorAtual = valorAtual + item;
//     console.log(valorAtual);
//   });
// }

// somarValores();

// let valores = [];

// formInput.addEventListener("input", (event) => {
//   console.log(Number(event.data));
//   valores.push(Number(event.data));
// });

// console.log(valores);

function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    document.appendChild(buttonElement);
    return buttonElement;
  }
  return element();
}

// document.appendChild(comprarBtn);

console.log(comprarBtn);
