'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// Navbar 토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌.
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});

('use strict');

// 프로젝트 필터링 관련 로직 처리
// const categories = document.querySelector('.categories');
// const projects = document.querySelectorAll('.project');
// const projectsContainer = document.querySelector('.projects');

// categories.addEventListener('click', event => {
//     const filter = event.target.dataset.category;
//     if (filter == null) {
//         return;
//     }

//     handleActiveSelection(event.target);
//     filterProjects(filter);
// });

// function handleActiveSelection(target) {
//     const active = document.querySelector('.category--selected');
//     active.classList.remove('category--selected');
//     target.classList.add('category--selected');
// }

// function filterProjects(filter) {
//     projectsContainer.classList.add('anim-out');
//     projects.forEach(project => {
//         if (filter == 'all' || filter === project.dataset.type) {
//             project.style.display = 'block';
//         } else {
//             project.style.display = 'none';
//         }
//     });

//     setTimeout(() => {
//         projectsContainer.classList.remove('anim-out');
//     }, 250);
// }

// const navbar = document.querySelector('#navbar');

// const home = document.querySelector('#home');

// navbar fixed로 고정시키고 특정 스크롤 부분에서 색 변화.
// document.addEventListener('scroll', () => {
//     if (window.scrollY > navbar.getBoundingClientRect().height) {
//         navbar.classList.add('navbar--dark');
//     } else {
//         navbar.classList.remove('navbar--dark');
//     }
// });

// navbar memnu button을 누르면 해당 페이지로 스크롤 됨.
// const nav_menu = document.querySelector('.nav__menu');
// const contactBtn = document.querySelector('.home__button');
// const menu_item = document.querySelectorAll('.navbar__menu__item');

// nav_menu.addEventListener('click', event => {
//     let link = event.target.dataset.link;

//     if (link == null || link == undefined) {
//         return;
//     }

//     scrollIntoViews(link);
//     selectedMenuItem(event.target);
// });

// contactBtn.addEventListener('click', () => {
//     scrollIntoViews('#contact');
// });

// toggle button
// const toggleBtn = document.querySelector('.toggle__btn');

// toggleBtn.addEventListener('click', () => {
//     nav_menu.classList.toggle('active');
// });

// 스크롤 내릴 때 home 화면 투명
// const home_container = document.querySelector('.home__container');

// document.addEventListener('scroll', () => {
//     home_container.style.opacity = 1 - window.scrollY / home.getBoundingClientRect().height;
// });

//arrow Button에 관한 것
// const topArrowBtn = document.querySelector('.top__arrow--btn');
// document.addEventListener('scroll', () => {
//     if (window.scrollY > home.getBoundingClientRect().height / 2) {
//         topArrowBtn.classList.add('visible');
//     } else {
//         topArrowBtn.classList.remove('visible');
//     }
// });

// topArrowBtn.addEventListener('click', () => {
//     scrollIntoViews('#home');
// });

// work category filtering
// const work_category = document.querySelector('.work__category');
// const work_projects = document.querySelector('.work__projects');
// const projects = document.querySelectorAll('.project');

// work_category.addEventListener('click', event => {
//     const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;

//     const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
//     target.classList.add('active');

//     const active = document.querySelector('.category__btn.active');

//     active.classList.remove('active');

//     work_projects.classList.add('anima-out');

//     setTimeout(() => {
//         projects.forEach(project => {
//             if (project.dataset.project == filter || filter == '*') {
//                 project.classList.remove('invisible');
//             } else {
//                 project.classList.add('invisible');
//             }
//         });

//         work_projects.classList.remove('anima-out');
//     }, 300);
// });

// 스크롤시 메뉴 활성화
// 1. 모든 섹션 요소들을 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

// const navItems = ['#home', '#about', '#skill', '#work', '#contact'];
// const sectionItems = navItems.map(nav => document.querySelector(nav));
// const navbar_menu = navItems.map(nav => document.querySelector(`[data-link="${nav}"]`));

// let selectedMenu = navbar_menu[0];
// let selectedIndex = 0;

// function selectedMenuItem(selected) {
//     selectedMenu.classList.remove('active');
//     selectedMenu = selected;
//     selectedMenu.classList.add('active');
// }

// function scrollIntoViews(selector) {
//     let scrollTo = document.querySelector(selector);
//     scrollTo.scrollIntoView({behavior: 'smooth'});
//     selectedMenuItem(navbar_menu[navItems.indexOf(selector)]);
// }

// const observerOption = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3,
// };

// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting && entry.intersectionRatio > 0) {
//             const index = navItems.indexOf(`#${entry.target.id}`);

//             if (entry.boundingClientRect.y < 0) {
//                 selectedIndex = index + 1;
//             } else {
//                 selectedIndex = index - 1;
//             }
//         }
//     });
// };

// const observer = new IntersectionObserver(observerCallback, observerOption);

// sectionItems.forEach(section => {
//     observer.observe(section);
// });

// window.addEventListener('wheel', () => {
//     if (window.scrollY === 0) {
//         selectedIndex = 0;
//     } else if (window.scrollY + window.innerHeight === document.body.clientHeight) {
//         selectedIndex = navbar_menu.length - 1;
//     }
//     selectedMenuItem(navbar_menu[selectedIndex]);
// });

// const sections = document.querySelectorAll('section');
// const callback = (entries, observer) => {
//     entries.forEach(entry => {
//         console.log(entry.target.id);
//     });
// };

// const observer = new IntersectionObserver(callback);

// sections.forEach(section => {
//     observer.observe(section);
// });
