// js/templates/home.js
export function Home() {
  const el = document.createElement('section');
  el.className = 'home';
  el.innerHTML = `
    <h2>Bem-vindo(a) — SPA Demo</h2>
    <p>Esta é a versão SPA básica pedida na atividade (troca de telas sem recarregar).</p>
    <p style="margin-top:12px;">
      <a class="btn" href="#/projetos">Ver projetos</a>
      <a class="btn btn-outline" href="#/cadastro">Quero me cadastrar</a>
    </p>
  `;
  return el;
}