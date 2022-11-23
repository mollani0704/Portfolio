const navbar = document.querySelector('#navbar');

navbar.style.backgroundColor = 'transparent';

window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.clientHeight / 2) {
        navbar.style.backgroundColor = '#fe918d';
        navbar.style.position = 'sticky';
        navbar.style.top = '0px';
        navbar.style.left = '0px';
        navbar.style.transition = 'all 300ms ease-in';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.position = 'static';
        navbar.style.transition = 'all 300ms ease-in';
    }
    console.log(navbar.clientHeight);
    console.log(window.scrollY);
});
