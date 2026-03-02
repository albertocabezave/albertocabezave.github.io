const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    
    // Animación simple del botón (opcional)
    menu.classList.toggle('is-active');
});