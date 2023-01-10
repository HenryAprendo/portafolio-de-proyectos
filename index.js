const contentMenu = document.querySelector('[data-menu-content]');


const btnOpenMenu = document.querySelector('[data-open-menu]');
btnOpenMenu.addEventListener('click', () => {
    contentMenu.classList.toggle('show__menu');
});

const btnCloseMenu = document.querySelector('[data-close-menu]');
btnCloseMenu.addEventListener('click', () => {
    contentMenu.classList.remove('show__menu');
});


// seccion de proyectos

const projectContents = document.querySelectorAll('.content');
projectContents.forEach( item => item.classList.add('show'));

const tabs = document.querySelectorAll('[data-tab]');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const element = e.target;
        const index = element.dataset.tab;
        projectContents[index].classList.toggle('show');
        element.classList.toggle('active');
    });
});