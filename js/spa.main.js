import { HomeTemplate } from "./templates/home.js";
import { ProjetosTemplate } from "./templates/projetos.js";
import { CadastroTemplate } from "./templates/cadastro.js";

function navegar() {
  const hash = window.location.hash.replace("#", "");
  const main = document.querySelector("main");

  if (!main) return;

  switch (hash) {
    case "projetos":
      main.innerHTML = ProjetosTemplate;
      break;

    case "cadastro":
      main.innerHTML = CadastroTemplate;
      break;

    default:
      main.innerHTML = HomeTemplate;
      break;
  }
}

window.addEventListener("hashchange", navegar);
window.addEventListener("DOMContentLoaded", navegar);