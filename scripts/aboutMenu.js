const openMenuAbout = document.getElementById('about-open');
const aboutMenu = document.getElementById('about-header');
const closeMenuAbout = document.getElementById('about-close');
const aboutHeaderItems = document.getElementsByClassName('navbar-brand')[0];
const aboutMenuItems = document.querySelectorAll('.about-bottom-nav');

function aboutDisplayMenu() {
  aboutMenu.classList.toggle('hide');
  openMenuAbout.style.display = 'none';
  closeMenuAbout.style.display = 'block';
}

function aboutCollapseMenu() {
  aboutMenu.classList.toggle('hide');
  closeMenuAbout.style.display = 'none';
  openMenuAbout.style.display = 'block';
}

openMenuAbout.addEventListener('click', aboutDisplayMenu);
closeMenuAbout.addEventListener('click', aboutCollapseMenu);
aboutHeaderItems.addEventListener('click', aboutCollapseMenu);
aboutMenuItems.forEach((element) => {
  element.addEventListener('click', aboutCollapseMenu);
});