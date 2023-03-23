// // function verificarValor(valor) {
// //   return console.log(!!valor);
// // }

// // verificarValor("");

// // function terceiraIdade(idade) {
// //   if (typeof idade !== "number") {
// //     return "Informe a sua idade!";
// //   } else if (idade >= 60) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log(terceiraIdade(20));

// // Crie uma função para verificar se um valor é Truthy

// function isTruthy(valor) {
//   return console.log(!!valor);
// }
// isTruthy(" ");

// // Crie uma função matemática que retorne o perímetro de um quadrado
// // lembrando: perímetro é a soma dos quatro lados do quadrado

// function perimetro(lado) {
//   return lado * 4;
// }
// console.log(perimetro(10));

// // Crie uma função que retorne o seu nome completo
// // ela deve possuir os parâmetros: nome e sobrenome

// function nomeCompleto(nome, sobreNome) {
//   return console.log(nome + " " + sobreNome);
// }

// nomeCompleto("Tiago", "Guimarães");

// // Crie uma função que verifica se um número é par

// function isEven(valor) {
//   if (valor % 2 === 0) {
//     return console.log("É par");
//   } else {
//     return console.log("É impar");
//   }
// }

// isEven(321456782);

// // Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)

// function retornaTipo(dado) {
//   return console.log(typeof dado);
// }

// retornaTipo(5);

// // addEventListener é uma função nativa do JavaScript
// // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// // utilize essa função para mostrar no console o seu nome completo
// // quando o evento 'click' ocorrer.

// // addEventListener("click", function () {
// //   console.log("Clicado");
// // });

// // Corrija o erro abaixo
// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//   return console.log(
//     `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
//   );
// }
// function jaVisitei(paisesVisitados) {
//   return console.log(
//     `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
//   );
// }
// precisoVisitar(20);
// jaVisitei(20);
