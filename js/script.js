const slides = Array.from(document.querySelectorAll("[data-slide]"));
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const visibleStatus = document.querySelector("[data-visible-status]");
const statusText = document.querySelector("[data-status-text]");

let currentIndex = 0;

function showSlide(nextIndex) {
    currentIndex = nextIndex;
    const slideNumber = currentIndex + 1;
    const status = `${slideNumber} / ${slides.length}`;

    slides.forEach((slide, index) => {
        // hiddenを切り替えると、画面表示だけでなく支援技術の読み上げ対象も整理しやすくなります。
        slide.hidden = index !== currentIndex;
    });

    visibleStatus.textContent = status;
    statusText.textContent = `現在のスライド: ${status}`;
}

function showPreviousSlide() {
    const previousIndex =
        currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

    showSlide(previousIndex);
}

function showNextSlide() {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

    showSlide(nextIndex);
}

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentIndex);
