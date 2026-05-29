document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.getElementById('slider3D');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlider() {
        const angleStep = 360 / totalSlides;
        
        slides.forEach((slide, index) => {
            let offsetAngle = (index - currentIndex) * angleStep;
            
            // translateZ(420px) increases track radius to accommodate bigger sizes perfectly
            slide.style.transform = `rotateY(${offsetAngle}deg) translateZ(420px)`;
            
            // Layout opacity configuration
            if (index === currentIndex) {
                slide.style.opacity = '1';
                slide.style.zIndex = '10';
                slide.style.boxShadow = '0 0 35px rgba(0, 255, 102, 0.6)';
            } else if (index === (currentIndex + 1) % totalSlides || index === (currentIndex - 1 + totalSlides) % totalSlides) {
                // Surrounding adjacent visible cards
                slide.style.opacity = '0.4';
                slide.style.zIndex = '5';
            } else {
                // Hide or fade deep background layers to prevent chaotic visual stacking
                slide.style.opacity = '0.1';
                slide.style.zIndex = '1';
            }
        });
    }

    // Automatic slide rotation (Every 3 seconds)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 3000);

    // Initial Trigger on runtime
    updateSlider();
});