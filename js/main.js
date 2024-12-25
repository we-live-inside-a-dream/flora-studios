document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    
    function nextSlide() {
        // Remove active class from current item
        items[currentItem].classList.remove('active');
        
        // Move to next item
        currentItem = (currentItem + 1) % items.length;
        
        // Add active class to new current item
        items[currentItem].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Oppening hamburgur menue
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    })
    // Close menu when clicking a link
    // document.querySelectorAll('.nav-links a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         hamburger.classList.remove('active');
    //         navLinks.classList.remove('active');
    //     });
    // });
}); 