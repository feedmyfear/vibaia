function carregando( estado = true ) {
  if ( estado ) {
    document.querySelector('.loader-container').style.display = 'flex'
  } else {
    document.querySelector('.loader-container').style.display = 'none'
  }
}

function ativarList() {
  let check = document.querySelectorAll('.check-trigger li')
  check.forEach( el => {
    el.addEventListener('click', function() {
      this.classList.toggle('check-ativo')
    })
  })
}