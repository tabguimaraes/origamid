console.log("OK");

const links = document.querySelectorAll(".header-menu a");

function ativarLink(linkAtivo) {
  const url = location.href;
  const href = linkAtivo.href;
  //   console.log(href);
  //   console.log("");
  console.log(url);
}

links.forEach(ativarLink);
