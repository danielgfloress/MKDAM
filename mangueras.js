const track = document.querySelector(".track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const cards = document.querySelectorAll(".card");

let currentIndex = 0;

// Cantidad de tarjetas visibles
const visibleCards = 4;

// Ancho de una tarjeta
const cardWidth = cards[0].offsetWidth + 20;

// Máximo desplazamiento
const maxIndex = cards.length - visibleCards;

// Función para mover el carrusel
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // vuelve al inicio
    }

    updateCarousel();
});

// Botón anterior
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex; // va al final
    }

    updateCarousel();
});

// Auto carrusel
setInterval(() => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    updateCarousel();
}, 4000);