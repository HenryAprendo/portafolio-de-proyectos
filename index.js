const contentMenu = document.querySelector('[data-menu-content]');


const btnOpenMenu = document.querySelector('[data-open-menu]');
btnOpenMenu.addEventListener('click', () => {
    contentMenu.classList.toggle('show__menu');
});

const btnCloseMenu = document.querySelector('[data-close-menu]');
btnCloseMenu.addEventListener('click', () => {
    contentMenu.classList.remove('show__menu');
});
