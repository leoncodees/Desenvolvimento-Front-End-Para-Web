import { getRouteFromHash } from './router.js';

const app = document.getElementById('app');

async function render() {
  const view = getRouteFromHash(); // 'home', 'projetos', 'cadastro'
  try {
    const resp = await fetch(`../js/templates/${view}.html`);
    const html = await resp.text();
    app.innerHTML = html;
  } catch (e) {
    app.innerHTML = `<h2>Página não encontrada</h2>
                     <p><a href="#/">Voltar</a></p>`;
  }
}

window.addEventListener('hashchange', render);
render();