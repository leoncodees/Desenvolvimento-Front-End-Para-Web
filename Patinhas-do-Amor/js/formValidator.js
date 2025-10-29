// Validações simples + consistência (email == confirmarEmail)
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/; // BR
const reCEP = /^\d{5}-?\d{3}$/;
const reCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

export function validateCadastro(form) {
  const get = (n) => form.querySelector(`[name="${n}"]`);
  const nome = get('nome')?.value?.trim();
  const email = get('email')?.value?.trim();
  const confirmar = get('confirmarEmail')?.value?.trim();
  const telefone = get('telefone')?.value?.trim();
  const cep = get('cep')?.value?.trim();
  const cpf = get('cpf')?.value?.trim();

  const errors = [];
  if (!nome) errors.push('Informe seu nome.');
  if (!email || !reEmail.test(email)) errors.push('E-mail inválido.');
  if (email !== confirmar) errors.push('E-mail e confirmação não conferem.');
  if (telefone && !reTelefone.test(telefone)) errors.push('Telefone inválido.');
  if (cep && !reCEP.test(cep)) errors.push('CEP inválido.');
  if (cpf && !reCPF.test(cpf)) errors.push('CPF inválido.');

  return errors;
}