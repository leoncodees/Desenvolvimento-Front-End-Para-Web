// js/spa-router.js
import { Home } from './templates/home.js';
import { Projetos } from './templates/projetos.js';
import { Cadastro } from './templates/cadastro.js';
import { NotFound } from './templates/notfound.js';

export function startRouter(mountEl) {
  const routes = {
    '#/': Home,
    '#/projetos': Projetos,
    '#/cadastro': Cadastro,
  };

  function render() {
    const key = location.hash || '#/';
    const Page = routes[key] || NotFound;

    mountEl.innerHTML = '';
    mountEl.appendChild(Page());
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
  render();
}