const hamburgerBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const header =document.getElementById('header')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-clicked');
    overlay.classList.toggle('overlay-avtive');
    document.body.classList.toggle('stop-scroll');
});


let lastScroll = 0;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        header.classList.add('hide-header');
    } else {
        header.classList.remove('hide-header');
    }
    lastScroll = currentScroll;
})



