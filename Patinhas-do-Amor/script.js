/* =========================
   UTILIDADES GERAIS
   ========================= */
// Menu ativo + aria-current
(function marcarMenuAtivo() {
  const file = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === file) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();

// Ano no rodapé
document.getElementById('ano')?.append(new Date().getFullYear());


// --- MÁSCARAS: bind direto nos IDs ---
function onlyDigits(v){ return v.replace(/\D/g,''); }

function maskCPF(v){
  const d = onlyDigits(v).slice(0,11);
  return d.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*$/, (m,a,b,c,d2)=>{
    let out = a;
    if(b) out += '.'+b;
    if(c) out += '.'+c;
    if(d2) out += '-'+d2;
    return out;
  });
}
function maskCEP(v){
  const d = onlyDigits(v).slice(0,8);
  return d.replace(/^(\d{0,5})(\d{0,3}).*$/, (m,a,b)=> b ? `${a}-${b}` : a);
}
function maskPhoneBR(v){
  const d = onlyDigits(v).slice(0,11);
  if(d.length <= 10){
    // (11) 1234-5678
    return d.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*$/, (m,a,b,c)=>{
      let out = a ? `(${a}` : '';
      if(a && a.length===2) out += ') ';
      if(b) out += b;
      if(c) out += '-' + c;
      return out;
    });
  }
  // (11) 91234-5678
  return d.replace(/^(\d{0,2})(\d{0,5})(\d{0,4}).*$/, (m,a,b,c)=>{
    let out = a ? `(${a}` : '';
    if(a && a.length===2) out += ') ';
    if(b) out += b;
    if(c) out += '-' + c;
    return out;
  });
}

function bindMasksById(){
  const tel = document.getElementById('telefone');
  const cpf = document.getElementById('cpf');
  const cep = document.getElementById('cep');

  if(tel){
    tel.setAttribute('inputmode','tel');
    tel.maxLength = 15;
    tel.addEventListener('input', e => { e.target.value = maskPhoneBR(e.target.value); });
  }
  if(cpf){
    cpf.setAttribute('inputmode','numeric');
    cpf.maxLength = 14;
    cpf.addEventListener('input', e => { e.target.value = maskCPF(e.target.value); });
  }
  if(cep){
    cep.setAttribute('inputmode','numeric');
    cep.maxLength = 9;
    cep.addEventListener('input', e => { e.target.value = maskCEP(e.target.value); });
  }
}

// garante ativação
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', bindMasksById);
} else {
  bindMasksById();
}
/* =========================
   VALIDAÇÃO DO FORMULÁRIO
   ========================= */
(function formCadastro() {
  const form = document.getElementById('formCadastro');
  const saida = document.getElementById('resultado');
  if (!form) return;

  const showError = (input, msg) => {
    const small = input?.parentElement?.querySelector('.error');
    if (small) small.textContent = msg || '';
    if (msg) input?.setAttribute('aria-invalid', 'true');
    else input?.removeAttribute('aria-invalid');
  };

  // Validação simples no submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const nome = form.nome;
    if (!nome.value.trim() || nome.value.trim().length < 3) {
      ok = false; showError(nome, 'Informe seu nome (mín. 3 caracteres).');
    } else showError(nome, '');

    const email = form.email;
    if (!email.validity.valid) {
      ok = false; showError(email, 'E-mail inválido.');
    } else showError(email, '');

    const tel = form.telefone;
    const telDigits = onlyDigits(tel.value);
    if (telDigits.length < 10) { // 10 ou 11 dígitos
      ok = false; showError(tel, 'Telefone incompleto.');
    } else showError(tel, '');

    const cpf = form.cpf;
    if (onlyDigits(cpf.value).length !== 11) {
      ok = false; showError(cpf, 'CPF incompleto.');
    } else showError(cpf, '');

    const cep = form.cep;
    if (onlyDigits(cep.value).length !== 8) {
      ok = false; showError(cep, 'CEP incompleto.');
    } else showError(cep, '');

    const endereco = form.endereco;
    if (!endereco.value.trim()) { ok = false; showError(endereco, 'Informe o endereço.'); }
    else showError(endereco, '');

    const cidade = form.cidade;
    if (!cidade.value.trim()) { ok = false; showError(cidade, 'Informe a cidade.'); }
    else showError(cidade, '');

    const estado = form.estado;
    if (!estado.value) { ok = false; estado.focus(); }

    const tipo = form.tipo;
    if (!tipo.value) { ok = false; tipo.focus(); }

    const lgpd = document.getElementById('lgpd');
    if (!lgpd.checked) { ok = false; lgpd.focus(); }

    if (ok) {
      saida.textContent = 'Cadastro enviado com sucesso! (simulação para atividade)';
      saida.style.color = 'green';
      form.reset();
    } else {
      saida.textContent = 'Verifique os campos destacados.';
      saida.style.color = '#b00020';
    }
  });

  // Limpa mensagens ao digitar
  form.addEventListener('input', (e) => {
    const el = e.target;
    if (['INPUT','TEXTAREA','SELECT'].includes(el.tagName)) {
      showError(el, '');
    }
  });
})();
const nav = document.querySelector('.site-nav');
const menuBtn = document.querySelector('.nav-toggle');
const subBtns = document.querySelectorAll('.sub-toggle');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Controla submenus no mobile
subBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      e.preventDefault();
      const li = btn.closest('.has-sub');
      const open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    }
  });
});
// abre/fecha o menu principal no mobile
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  const submenuToggle = document.querySelector('.submenu-toggle');
  const hasSubmenu = document.querySelector('.has-submenu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // abre/fecha o submenu "Projetos" no mobile
  if (submenuToggle && hasSubmenu) {
    submenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = hasSubmenu.classList.toggle('submenu-open');
      submenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
// ===== Validação leve (opcional): marca erro quando campo inválido perde o foco
document.addEventListener('focusout', (e) => {
  const el = e.target;
  if (el.matches('.input, .select, .textarea') && el.required) {
    const field = el.closest('.form-field');
    if (!field) return;
    const invalid = !el.checkValidity();
    field.classList.toggle('has-error', invalid);
    el.setAttribute('aria-invalid', invalid ? 'true' : 'false');
  }
});


// ===== Modal: abra/feche usando data-atributos
document.addEventListener('click', function (e) {
  const openBtn = e.target.closest('[data-open-modal]');
  if (openBtn) {
    const sel = openBtn.getAttribute('data-open-modal');
    const modal = document.querySelector(sel);
    if (modal) {
      modal.removeAttribute('aria-hidden'); // ← ESSA LINHA é o que mostra o modal
      document.body.style.overflow = 'hidden';
    }
  }

  const closeBtn = e.target.closest('[data-close-modal]');
  if (closeBtn) {
    const modal = closeBtn.closest('.modal-backdrop');
    if (modal) {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
});
// === SUBMIT: mostra mensagem e evita navegação ===
(() => {
  const form  = document.getElementById('formCadastro');
  if (!form) return;
  const saida = document.getElementById('resultado');

  form.addEventListener('submit', (e) => {
    e.preventDefault();              // garante que não navega
    if (saida) {
      saida.textContent = 'Cadastro enviado com sucesso! (simulação para atividade)';
      saida.style.color = 'green';
    }
    form.reset();                    // opcional: limpa o formulário
  });
})();
