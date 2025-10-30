// js/templates/cadastro.js
export function Cadastro() {
  const el = document.createElement('section');
  el.className = 'pg-cadastro';
  el.innerHTML = `
    <h2>Cadastro (SPA)</h2>
    <p>Template carregado via JS. O formulário completo com validação e localStorage está em <code>html/cadastro.html</code>.</p>
    <p style="margin-top:12px;"><a class="btn" href="#/">Voltar ao início</a></p>
  `;
  return el;
}