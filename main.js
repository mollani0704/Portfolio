const navbar = document.querySelector('#navbar');

// navbar fixed로 고정시키고 특정 스크롤 부분에서 색 변화.
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbar.getBoundingClientRect().height);

    if (window.scrollY > navbar.getBoundingClientRect().height) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

const nav_menu = document.querySelector('.nav__menu');
const contactBtn = document.querySelector('.home__button');
const contact = document.querySelector('#contact');

nav_menu.addEventListener('click', event => {
    console.log(event.target);
    console.log(event.target.dataset.link);

    let target = event.target;
    let link = event.target.dataset.link;

    if (link == null || link == undefined) {
        return;
    }

    let page = document.querySelector(link);
    page.scrollIntoView({behavior: 'smooth'});
});

contactBtn.addEventListener('click', () => {
    contact.scrollIntoView({behavior: 'smooth'});
});
