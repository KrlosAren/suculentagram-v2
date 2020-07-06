
const buttonMenu = document.getElementById('button-menu')

buttonMenu.onclick = () => {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('is-active')
}