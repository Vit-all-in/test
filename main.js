const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  })

  navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }))
}

navSlide()

function closeMenu() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  let header = document.querySelector('.header')
  
  document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(header);
    if (!click) {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    }
  })
}
closeMenu()
