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
