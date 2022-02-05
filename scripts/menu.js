const openMenu = document.getElementById('open');
const menu = document.getElementById('header');
const closeMenu = document.getElementById('close');
const headerItems = document.getElementsByClassName('navbar-brand')[0];
const menuItems = document.querySelectorAll('.bottom-nav');
const bodyTag = document.getElementsByTagName('body')[0];

function displayMenu() {
  menu.classList.add('hide');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  bodyTag.classList.add('blurr');
}

function collapseMenu() {
  menu.classList.remove('hide');
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';
  bodyTag.classList.remove('blurr');
}

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', collapseMenu);
headerItems.addEventListener('click', collapseMenu);

menuItems.forEach((element) => {
  element.addEventListener('click', collapseMenu);
});
