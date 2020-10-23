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

// Renderizadores
function galeria_renderizar(data, element) {
  const markup = galeria_template(data)
  element.innerHTML = markup
}
function playlist_renderizar(data, element) {
  const markup = playlist_template(data)
  element.innerHTML = markup
}

// Templates
function galeria_template(data) {
  return ( /* html */ `
  <div class="uk-position-relative uk-visible-toggle uk-light" uk-scrollspy="cls:uk-animation-fade" tabindex="-1" uk-slideshow="animation: pull">
    <ul class="uk-slideshow-items">
      <li>
        <img data-src="galeria/01.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/02.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/03.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/04.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/05.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/06.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/07.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/08.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/09.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
      </li>
      <li>
        <img data-src="galeria/10.jpg" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
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