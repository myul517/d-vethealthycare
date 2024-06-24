document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    
    let currentIndex = 0;
    const slideCount = slideImages.length;
    const slideWidth = slideImages[0].clientWidth;

    // 복사해서 처음과 끝에 이미지 추가
    const firstClone = slideImages[0].cloneNode(true);
    const lastClone = slideImages[slideCount - 1].cloneNode(true);

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slideImages[0]);

    const totalSlides = document.querySelectorAll('.slides img').length;

    // 슬라이드를 초기 위치로 설정
    slides.style.transform = `translateX(${-slideWidth}px)`;

    const moveToNextSlide = () => {
        currentIndex++;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;

        if (currentIndex === slideCount) {
            setTimeout(() => {
                slides.style.transition = "none";
                currentIndex = 0;
                slides.style.transform = `translateX(${-slideWidth}px)`;
            }, 500); // 0.5s와 같은 시간으로 설정하여 눈에 띄지 않게 함
        }
    };

    setInterval(moveToNextSlide, 3000); // 3초마다 다음 슬라이드로 이동
});

// script.js
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});