const openMenu = document.getElementById('open');
const menu = document.getElementById('header');
const closeMenu = document.getElementById('close');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('hide');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('hide');
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';
});