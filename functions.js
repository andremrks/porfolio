/*Function to show mobile menu*/

const btnMobile = document.getElementById('btn-mobile');

function openMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', openMenu);


/*Function to show nav-menu when scroll up*/

let lastScrollTop = 0;
    nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = '-70px';
    }else {
        nav.style.top = '0';
    }
    lastScrollTop = scrollTop;
})