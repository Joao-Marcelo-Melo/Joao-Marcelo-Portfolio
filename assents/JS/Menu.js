let menu = document.querySelector('.mobile-menu')
let btn = document.querySelector('.btn')

function MenuToogle() {


     if (menu.classList.contains('menu-aberto')) {
          menu.classList.remove('menu-aberto')
          btn.classList.remove('menu-fechar')
     } else {
          menu.classList.add('menu-aberto')
          btn.classList.add('menu-fechar')
     }
}

function FecharMenu() {
     menu.classList.remove('menu-aberto')
     btn.classList.remove('menu-fechar')
}
