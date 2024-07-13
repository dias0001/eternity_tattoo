const rolagem = ()=> {
    const html = document.documentElement
    const seta = document.getElementById('go-top')
  
    /* Se a rolagem for maior que 550, a seta aparece 
    abaixo de 550 esconde */
    if (html.scrollTop > 550 ) {
      seta.style.display = 'block'
    } else {
      seta.style.display = 'none'
    }
  }
  //window.addEventListener('scroll', rolagem)
window.onscroll = ()=> rolagem()//evento somente para elem q existem no html


// const fechaMenu = ()=> {
//   var offcanvas_el = document.getElementById('offcanvasNavbar')
//   var offcanvas = new bootstrap.Offcanvas(offcanvas_el)

//   offcanvas.hide()
// }

/* fechamento do menu, mas está quebrando */

// const nav = document.getElementById('offcanvasNavbar')
// const teste = document.getElementById('teste')

// teste.addEventListener('click', () => {
//   nav.style.display = 'none'
//   const efeito = document.getElementsByClassName('offcanvas-backdrop')
//   efeito[0].style.display = 'none'
// })


//inicializada animações scrool do AOS
AOS.init();



