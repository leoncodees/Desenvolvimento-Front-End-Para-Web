// js/templates/notfound.js
export function NotFound() {
  const el = document.createElement('section');
  el.className = 'pg-404';
  el.innerHTML = `
    <h2>Página não encontrada</h2>
    <p><a class="btn" href="#/">Voltar</a></p>
  `;
  return el;
}