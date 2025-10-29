// js/templates/projetos.js
export function Projetos() {
  const el = document.createElement('section');
  el.className = 'pg-projetos';
  el.innerHTML = `
    <h2>Projetos (SPA)</h2>
    <p>Exemplo de rota carregada via JavaScript (template JS).</p>

    <div class="cards-grid" style="margin-top:16px;">
      <article class="card">
        <div class="badges"><span class="badge-warning">Meta 500kg</span></div>
        <h3>Ração do Bem</h3>
        <p>Campanha de arrecadação de ração.</p>
      </article>
      <article class="card">
        <div class="badges"><span class="badge-success">Ativo</span></div>
        <h3>Resgates e tratamentos</h3>
        <p>Ações de resgate e apoio veterinário.</p>
      </article>
    </div>

    <p style="margin-top:16px;"><a class="btn btn-outline" href="#/">Voltar ao início</a></p>
  `;
  return el;
}