/*Function to show mobile menu*/

let btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', openMenu);

function openMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

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
});

/*Function to reveal section when scroll*/

window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('#sobre-mim', {duration : 2500, origin: 'bottom'});
sr.reveal('#experience', {duration : 2500, origin: 'bottom'});
sr.reveal('#portfolio', {duration : 2500,  origin: 'bottom'});
sr.reveal('#contacts', {duration : 2500,  origin: 'bottom'});


/* Function to show button to top*/ 

window.addEventListener('scroll', function(){
    const toTop = document.querySelector('.top-btn');
    toTop.classList.toggle("fadeIn", window.scrollY > 120);
});




/*const i = 0;

    const tag = document.getElementById("text");
    const html = document.getElementById("text").innerHTML;
    const attr = tag.setAttribute("data", html);
    const txt = tag.getAttribute("data");
    const speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
        //console.log(document.getElementById("text").innerHTML);
    }

typeWriter();