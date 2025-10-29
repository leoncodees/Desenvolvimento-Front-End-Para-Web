export function Home() {
  return `
    <section class="conteudo container md:grid md:grid12">
      <div class="conteudo__container md:grid12">
        <h2>Adote, ame e transforme vidas!</h2>
        <p>Conheça nossos projetos e participe dessa causa!</p>

        <p><a class="btn" href="#/projetos">Ver projetos</a>
        <a class="btn btn-outline" href="#/cadastro">Quero me cadastrar</a></p>
      </div>

      <figure class="media md:span-6">
        <img src="../img/cachorro-fofo.jpg" alt="cachorro fofo">
      </figure>
    </section>
  `;
}