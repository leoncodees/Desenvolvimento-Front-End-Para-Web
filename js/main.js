console.log("JS carregou ✅");

document.addEventListener("DOMContentLoaded", () => {
  // util: aplica máscara enquanto digita
  function mascarar(input, fn) {
    if (!input) return;
    input.addEventListener("input", () => {
      const digitos = input.value.replace(/\D/g, "");
      input.value = fn(digitos);
    });
  }

  // máscaras
  const maskCPF = v =>
    v.replace(/(\d{3})(\d)/, "$1.$2")
     .replace(/(\d{3})(\d)/, "$1.$2")
     .replace(/(\d{3})(\d{1,2})/, "$1-$2")
     .slice(0, 14); // 000.000.000-00

  const maskCEP = v =>
    v.replace(/(\d{5})(\d)/, "$1-$2").slice(0, 9); // 00000-000

  const maskPhone = v =>
    v.replace(/^(\d{2})(\d)/, "($1) $2")
     .replace(/(\d{5})(\d{1,4})/, "$1-$2")
     .slice(0, 15); // (00) 00000-0000

  // campos (ids precisam bater com o HTML)
  const cpf = document.getElementById("cpf");
  const cep = document.getElementById("cep");
  const tel = document.getElementById("telefone");

  mascarar(cpf, maskCPF);
  mascarar(cep, maskCEP);
  mascarar(tel, maskPhone);

  // envio do formulário: mantém validação nativa
  const form = document.getElementById("form-cadastro");
  const msg  = document.getElementById("msg-sucesso"); // <- esse é o id do seu HTML

  if (form && msg) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        // deixa o HTML5 mostrar os erros
        return;
      }
      e.preventDefault();
      msg.textContent = "✅ Cadastro enviado com sucesso!";
      msg.style.display = "block";
      form.reset();
      setTimeout(() => (msg.style.display = "none"), 4000);
    });
  }
});