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
const menu_item = document.querySelectorAll('.navbar__menu__item');

nav_menu.addEventListener('click', event => {
    let link = event.target.dataset.link;

    if (link == null || link == undefined) {
        return;
    }

    scrollIntoViews(link);

    nav_menu.classList.toggle('active');
});

contactBtn.addEventListener('click', () => {
    scrollIntoViews('#contact');
});

function scrollIntoViews(selector) {
    let scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// toggle button
const toggleBtn = document.querySelector('.toggle__btn');

toggleBtn.addEventListener('click', () => {
    nav_menu.classList.toggle('active');
});

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

// work category filtering
const work_category = document.querySelector('.work__category');
const work_projects = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

work_category.addEventListener('click', event => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;

    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('active');

    const active = document.querySelector('.category__btn.active');

    active.classList.remove('active');

    work_projects.classList.add('anima-out');

    setTimeout(() => {
        projects.forEach(project => {
            if (project.dataset.project == filter || filter == '*') {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });

        work_projects.classList.remove('anima-out');
    }, 300);
});
