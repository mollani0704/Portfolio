const navbar = document.querySelector('#navbar');

const home = document.querySelector('#home');

// navbar fixed로 고정시키고 특정 스크롤 부분에서 색 변화.
document.addEventListener('scroll', () => {
    if (window.scrollY > navbar.getBoundingClientRect().height) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// navbar memnu button을 누르면 해당 페이지로 스크롤 됨.
const nav_menu = document.querySelector('.nav__menu');
const contactBtn = document.querySelector('.home__button');

nav_menu.addEventListener('click', event => {
    let target = event.target;
    let link = event.target.dataset.link;

    if (link == null || link == undefined) {
        return;
    }

    scrollIntoViews(link);
});

contactBtn.addEventListener('click', () => {
    scrollIntoViews('#contact');
});

function scrollIntoViews(selector) {
    let scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// 스크롤 내릴 때 home 화면 투명
const home_container = document.querySelector('.home__container');

document.addEventListener('scroll', () => {
    home_container.style.opacity = 1 - window.scrollY / home.getBoundingClientRect().height;
});

//arrow Button에 관한 것
const topArrowBtn = document.querySelector('.top__arrow--btn');
document.addEventListener('scroll', () => {
    if (window.scrollY > home.getBoundingClientRect().height / 2) {
        topArrowBtn.classList.add('visible');
    } else {
        topArrowBtn.classList.remove('visible');
    }
});

topArrowBtn.addEventListener('click', () => {
    home.scrollIntoView({behavior: 'smooth'});
});
