document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider');
    const sliderImages = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function setActiveIndicator(index) {
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle('active', idx === index);
        });
    }

    function slideToImage(index) {
        const imageWidth = slider.clientWidth;
        slider.style.transform = `translateX(-${index * imageWidth}px)`;
        setActiveIndicator(index);
    }

    // Indicator click to slide to specific image
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            slideToImage(currentIndex);
        });
    });

    // Swipe functionality
    let startX, isDragging = false;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        e.preventDefault(); // Prevent dragging images or text selection
    });

    slider.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const dx = e.clientX - startX;
            if (dx > 50) { // Swipe right
                if (currentIndex > 0) {
                    currentIndex--;
                    slideToImage(currentIndex);
                }
                isDragging = false; // Reset after handling swipe
            } else if (dx < -50) { // Swipe left
                if (currentIndex < sliderImages.length - 1) {
                    currentIndex++;
                    slideToImage(currentIndex);
                }
                isDragging = false; // Reset after handling swipe
            }
        }
    });

    slider.addEventListener('mouseup', () => {
        isDragging = false;
    });

    slider.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) { // Single touch gestures only
            const dx = e.touches[0].clientX - startX;
            if (dx > 50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    slideToImage(currentIndex);
                }
            } else if (dx < -50) {
                if (currentIndex < sliderImages.length - 1) {
                    currentIndex++;
                    slideToImage(currentIndex);
                }
            }
        }
    });
});