document.addEventListener('load', () => {
  const main = document.getElementById('main')
  let teste = document.querySelector('.loader-container')
})

// Triggers
function galeria_abrir() {
  galeria_renderizar('teste', main)
}
function playlist_abrir() {
  playlist_renderizar('teste', main)
}
function checklist_abrir() {
  checklist_renderizar('teste', main)
}

// Renderizadores
function galeria_renderizar(data, element) {
  const markup = galeria_template(data)
  element.innerHTML = markup
}
function playlist_renderizar(data, element) {
  const markup = playlist_template(data)
  element.innerHTML = markup
}
function checklist_renderizar(data, element) {
  const markup = checklist_template(data)
  element.innerHTML = markup
}


// Templates
function galeria_template(data) {
  return ( /* html */ `
  <div class="uk-position-relative uk-visible-toggle uk-light" uk-scrollspy="cls:uk-animation-fade" tabindex="-1" uk-slideshow="animation: pull">
    <ul class="uk-slideshow-items">
      <li>
        <img data-src="./galeria/01.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/02.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/03.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/04.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/05.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/06.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/07.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/08.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/09.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="./galeria/10.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
    </ul>
    <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
  </div>
  `)
}

function playlist_template(data) {
  return ( /* html */ `
  <iframe id="ytplayer" type="text/html"
  src="https://www.youtube.com/embed/?listType=playlist&list=PLfOo6IqGBtnOhjQWbyWd-o2fO76DBGjx0"
  width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: false"></iframe>
  `)
}

function checklist_template(data) {
  return ( /* html */ `
  <div class="uk-container">
    <h4>Checklist de metas Vih e Braia ❤️♥️</h4>
    <ul class="uk-list uk-list-disc">
      <li>Açaí com cachorro quente</li>
      <li>Macarronada do Braia</li>
      <li>Mousse da Vih</li>
      <li>Ver as estrelas e o luar no telhado ouvindo músicas: Hybrid Minds - Summer Rain e playlist nossa</li>
      <li>Assistir os filmes: Eu sou a lenda, A Culpa é das estrelas, Como eu era antes de você, A 5 passos de você, Baby, Titanic, Guerra Mundial Z, As Branquelas, The Dirt, Escola do Rock, Para todos os garotos que amei, Simplesmente acontece, Nasce uma estrela, Pearl Harbor, Até o último homem, Sniper Americano, Corações de Ferro, Titanic</li>
      <li>Acampar</li>
      <li>Pensar na possibilidade de ir para alto mar, mas não garantido</li>
      <li>Pular do telhado, dependendo da altura</li>
      <li>Dormir no telhado ou dormir olhando o céu</li>
      <li>Ensinar e jogar truco com a Vih</li>
      <li>Ensinar o Braia a nadar</li>
      <li>Vih trabalhar na empresa do Braia</li>
      <li>Montar uma banda</li>
      <li>Vih alargar orelha do Braia</li>
      <li>Emprestar livros: O Extraordinário para Braia e Mundo Novo para Vih</li>
      <li>Assistir a saga crepúsculo inteira</li>
      <li>Sorvete de cappuccino</li>
      <li>Andar pelas ruas no clima natalino</li>
      <li>Não brincar com canivete, pode machucar</li>
      <li>Vih experimentar Strogonoff do Braia</li>
      <li>Ir em concerto musical</li>
      <li>Caminhar com máscara do V</li>
      <li>Show de Drum and Bass</li>
      <li>Irmos na praia</li>
      <li>Bienal do Livro</li>
      <li>Guerra de travesseiro</li>
      <li>Fazer cócegas</li>
      <li>Viajar ao mundo: Amsterdam</li>
      <li>Rede para nós</li>
      <li>Ter gatinhos</li>
      <li>Cinema Drive in e cinema mudo, se existir</li>
      <li>Furar o septo juntos</li>
      <li>Boliche</li>
      <li>Tirar foto na divisa de Minas gerais</li>
    </ul>
  </div>
  `)
}