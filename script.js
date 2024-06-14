//  document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.getElementById("mobile-menu");
//   const navItems = document.getElementById("nav-items");

//   menuToggle.addEventListener("click", () => {
//     console.log("toggle clické");
//     navItems.classList.toggle("active");
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navItemsLeft = document.querySelector('.nav-items.left');
  const navItemsRight = document.querySelector('.nav-items.right');

  menuToggle.addEventListener('click', () => {
    navItemsLeft.classList.toggle('active');
    navItemsRight.classList.toggle('active');
  });

  const header = document.querySelector('header');
  const backgrounds = [
    "assets/accueil2.jpg",
    "assets/accueil1.jpg",
  ];

  let currentBackgroundIndex = 0;

  const changeBackground = () => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    
    header.style.transition = 'none';
    header.style.opacity = '0';

    setTimeout(() => {
      header.style.backgroundImage = `
        linear-gradient(
          to bottom,
          rgba(212, 177, 201, 1),
          rgba(212, 177, 201, 0.5) 30%,
          rgba(212, 177, 201, 0)
        ),
        linear-gradient(
          to top,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.5) 10%,
          rgba(0, 0, 0, 0)
        ),
        url(${backgrounds[currentBackgroundIndex]})`;

      header.style.backgroundSize = '130% 130%'; // Update size as required
      header.style.transition = 'opacity 1s ease-in-out, background-size 1s ease-in-out';
      header.style.opacity = '1';
    }, 1000); // Wait for fade-out before changing background
  };

  document.getElementById('arrow-left').addEventListener('click', (e) => {
    e.preventDefault();
    changeBackground();
  });

  document.getElementById('arrow-right').addEventListener('click', (e) => {
    e.preventDefault();
    changeBackground();
  });
});
