const openMenuAbout = document.getElementById('about-open');
const aboutMenu = document.getElementById('about-header');
const closeMenuAbout = document.getElementById('about-close');
const aboutHeaderItems = document.getElementsByClassName('navbar-brand')[0];
const aboutMenuItems = document.querySelectorAll('.about-bottom-nav');
const bodyTag = document.getElementsByTagName('body')[0];

function aboutDisplayMenu() {
  aboutMenu.classList.add('hide');
  openMenuAbout.style.display = 'none';
  closeMenuAbout.style.display = 'block';
  bodyTag.classList.add('blur');
}

function aboutCollapseMenu() {
  aboutMenu.classList.remove('hide');
  closeMenuAbout.style.display = 'none';
  openMenuAbout.style.display = 'block';
  bodyTag.classList.remove('blur');
}

openMenuAbout.addEventListener('click', aboutDisplayMenu);
closeMenuAbout.addEventListener('click', aboutCollapseMenu);
aboutHeaderItems.addEventListener('click', aboutCollapseMenu);
aboutMenuItems.forEach((element) => {
  element.addEventListener('click', aboutCollapseMenu);
});