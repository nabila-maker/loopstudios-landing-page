const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const liens = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    burger.classList.toggle('burger-cross');
    window.onscroll = function () { window.scrollTo(0, 0); };
});

liens.forEach((lien) => {
    lien.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        burger.classList.remove('burger-cross');
    });
});

