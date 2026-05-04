const track = document.querySelector('.track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const cardWidth = 240;
const visibleWidth = 700;
const totalCards = 8;

const originalCards = Array.from(track.children);
originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
});
originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    track.insertBefore(clone, track.firstChild);
});

let position = -(cardWidth * totalCards);
track.style.transition = 'none';
track.style.transform = `translateX(${position}px)`;

function goNext() {
    position -= cardWidth;
    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(${position}px)`;

    if (position <= -(cardWidth * totalCards * 2)) {
        setTimeout(() => {
            track.style.transition = 'none';
            position = -(cardWidth * totalCards);
            track.style.transform = `translateX(${position}px)`;
        }, 400);
    }
}

function goPrev() {
    position += cardWidth;
    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(${position}px)`;

    if (position >= 0) {
        setTimeout(() => {
            track.style.transition = 'none';
            position = -(cardWidth * totalCards);
            track.style.transform = `translateX(${position}px)`;
        }, 400);
    }
}

next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);