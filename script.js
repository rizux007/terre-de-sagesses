const images = ["assets/accueil2.jpg", "assets/accueil1.jpg"];

let currentIndex = 0;

function changeBackgroundImage(index) {
  const header = document.querySelector("header");
  header.style.backgroundImage = `
      linear-gradient(to bottom, rgba(212, 177, 201, 1), rgba(212, 177, 201, 0.5) 30%, rgba(212, 177, 201, 0)),
      linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0)),
      url(${images[index]})
    `;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  changeBackgroundImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeBackgroundImage(currentIndex);
}

document.getElementById("nextSlide").addEventListener("click", (e) => {
  e.preventDefault();
  nextSlide();
});

document.getElementById("prevSlide").addEventListener("click", (e) => {
  e.preventDefault();
  prevSlide();
});

setInterval(nextSlide, 5000);

changeBackgroundImage(currentIndex);

document.getElementById("mobile-menu").addEventListener("click", function () {
  document.getElementById("mobile-sidebar").classList.toggle("active");
});
