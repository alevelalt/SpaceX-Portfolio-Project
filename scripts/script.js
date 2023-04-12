const hamburgerBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-clicked');
    overlay.classList.toggle('overlay-avtive');
    document.body.classList.toggle('stop-scroll');
});




