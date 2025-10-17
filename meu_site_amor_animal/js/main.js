console.log("JS carregou ✅");

document.addEventListener("DOMContentLoaded", () => {
  // Funções de máscara
  const maskCPF = (v) =>
    v.replace(/\D/g, "")
     .replace(/(\d{3})(\d)/, "$1.$2")
     .replace(/(\d{3})(\d)/, "$1.$2")
     .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  const maskCEP = (v) =>
    v.replace(/\D/g, "")
     .replace(/(\d{5})(\d)/, "$1-$2")
     .slice(0, 9);

  const maskPhone = (v) =>
    v.replace(/\D/g, "")
     .replace(/(\d{2})(\d)/, "($1) $2")
     .replace(/(\d{5})(\d{4})$/, "$1-$2")
     .slice(0, 15);

  // Pega campos (ids precisam ser exatamente estes)
  const cpfInput  = document.getElementById("cpf");
  const cepInput  = document.getElementById("cep");
  const telInput  = document.getElementById("telefone");

  if (cpfInput)  cpfInput.addEventListener("input", (e) => e.target.value = maskCPF(e.target.value));
  if (cepInput)  cepInput.addEventListener("input", (e) => e.target.value = maskCEP(e.target.value));
  if (telInput)  telInput.addEventListener("input", (e) => e.target.value = maskPhone(e.target.value));

  // Submit com mensagem
  const form = document.getElementById("form-cadastro");
  const msg  = document.getElementById("mensagem");
  if (form && msg) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (form.checkValidity()) {
        msg.textContent = "✅ Cadastro enviado com sucesso!";
        msg.style.color = "green";
        // form.reset(); // descomente se quiser limpar após enviar
      } else {
        msg.textContent = "⚠️ Preencha todos os campos corretamente.";
        msg.style.color = "crimson";
        form.reportValidity();
      }
    });
  }
});
// Mensagem de sucesso no envio do cadastro
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  const msg = document.getElementById("msg-sucesso");

  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "✅ Cadastro enviado com sucesso!";
    msg.style.display = "block";
    form.reset();
    setTimeout(() => {
      msg.style.display = "none";
    }, 4000);
  });
});
// Máscara para CPF
const cpfInput = document.getElementById("cpf");
if (cpfInput) {
  cpfInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
  });
}

// Máscara para CEP
const cepInput = document.getElementById("cep");
if (cepInput) {
  cepInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = value;
  });
}