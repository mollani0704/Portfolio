// const navbar = document.querySelector('#navbar');

// navbar.style.backgroundColor = 'transparent';

// window.addEventListener('scroll', () => {
//     if (window.scrollY > navbar.clientHeight / 2) {
//         navbar.style.backgroundColor = '#fe918d';
//         navbar.style.position = 'sticky';
//         navbar.style.top = '0px';
//         navbar.style.left = '0px';
//         navbar.style.transition = 'all 300ms ease-in';
//     } else {
//         navbar.style.backgroundColor = 'transparent';
//         navbar.style.position = 'static';
//         navbar.style.transition = 'all 300ms ease-in';
//     }
//     console.log(navbar.clientHeight);
//     console.log(window.scrollY);
// });

const navbarMenu = document.querySelectorAll('.navbar__menu__item');

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skill = document.querySelector('#skill');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');

for (let i = 0; i < navbarMenu.length; i++) {
    navbarMenu[i].addEventListener('click', () => {
        if (navbarMenu[i].textContent == 'Home') {
            window.scrollTo(0, home.offsetHeight);
        } else if (navbarMenu[i].textContent == 'About') {
            window.scrollTo(0, about.getBoundingClientRect().height);
        } else if (navbarMenu[i].textContent == 'Skill') {
            window.scrollTo(0, skill.getBoundingClientRect().height);
        } else if (navbarMenu[i].textContent == 'My work') {
            window.scrollTo(0, work.getBoundingClientRect().height);
        }

        navbarMenu[i].textContent;
    });
}
