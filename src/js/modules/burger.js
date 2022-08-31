// бургер
export function isBurger() {
    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav')

    if(burger) {
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        burger.classList.toggle('_active');
        headerNav.classList.toggle('_active');
    })
}
}

// прокрутка при клике
const headerLinks = document.querySelectorAll('.header__link[data-goto]');

if(headerLinks.length > 0) {
  headerLinks.forEach(headerLink => {
    headerLink.addEventListener("click", onHeaderLinkClick);
  });

  function onHeaderLinkClick(e) {
    const headerLink = e.target;
    if(headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
      const gotoBlock = document.querySelector(headerLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if(burger.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burger.classList.remove('_active');
        headerNav.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
