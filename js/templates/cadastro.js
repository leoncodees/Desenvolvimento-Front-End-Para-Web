export function Cadastro() {
  return /*html*/`
    <section>
      <h1>Cadastro</h1>
      <form id="formCadastro" novalidate>
        <label>Nome* <input name="nome" required></label><br>
        <label>E-mail* <input type="email" name="email" required></label><br>
        <label>Confirmar e-mail* <input type="email" name="confirmarEmail" required></label><br>
        <label>Telefone <input name="telefone" placeholder="(11) 99999-9999"></label><br>
        <label>CEP <input name="cep" placeholder="00000-000"></label><br>
        <label>CPF <input name="cpf" placeholder="000.000.000-00"></label><br>
        <div id="msgsErro" class="alert" aria-live="assertive"></div>
        <button class="btn" type="submit">Enviar</button>
      </form>
    </section>
  `;
}