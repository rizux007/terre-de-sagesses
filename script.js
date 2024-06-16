

// const menuToggle = document.getElementById('mobile-menu');
// const navItems = document.querySelector('.nav-items');

// menuToggle.addEventListener('click', () => {
//   navItems.classList.toggle('active');
// });



// Récupération du bouton de toggle du menu
const menuToggle = document.getElementById('mobile-menu');

// Récupération des éléments de navigation gauche et droite
const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');

// Ajout d'un événement clic sur le bouton de toggle du menu
menuToggle.addEventListener('click', () => {
    // Toggle de la classe active sur les éléments de navigation
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
});
