document.addEventListener('DOMContentLoaded', function () {
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
    const header = document.querySelector('header');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

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

    // Portfolio items functionality
    const projectContainer = document.getElementById('project-container');
    if (projectContainer) {
        // Only run this if we're on the page that has #project-container
        fetch('../projects.json')
            .then(response => response.json())
            .then(projects => {
                projects.forEach(project => {
                    const projectItem = document.createElement('div');
                    projectItem.className = 'flex-item';

                    const img = document.createElement('img');
                    img.src = project.image;

                    img.alt = project.title;
                    img.className = 'project-image';


                    const overlay = document.createElement('div');
                    overlay.className = 'overlay';

                    const itemTitle = document.createElement('span');
                    itemTitle.className = 'item-title';
                    itemTitle.textContent = project.title;

                    projectItem.appendChild(img);
                    projectItem.appendChild(overlay);
                    projectItem.appendChild(itemTitle);
                    projectContainer.appendChild(projectItem);

                    // Click event to navigate to portfolio-landing.html
                    projectItem.addEventListener('click', () => {
                        window.location.href = `/portfolio-landing?title=${encodeURIComponent(project.title)}&image=${encodeURIComponent(project.image)}&link=${encodeURIComponent(project.link)}`;
                    });
                });
            })
            .catch(error => console.error('Error loading projects:', error));
    }

    // Portfolio landing page functionality
    const projectHero = document.getElementById('project-hero');
    if (projectHero) {
        // Only run this if we're on the page that has #project-hero
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');

        const image = urlParams.get('image');
        const link = urlParams.get('link');

        // Display basic info
        const projectTitleEl = document.getElementById('project-title');
        const projectDetailsEl = document.getElementById('project-details');
        const projectGalleryEl = document.getElementById('project-gallery');

        if (projectTitleEl) {
            projectTitleEl.textContent = title || 'Untitled Project';
        }
        if (projectHero && image) {
            const img = document.createElement('img');
            img.src = image;
            img.alt = title;
            img.className = 'hero-image';
            projectHero.appendChild(img);
        }
        if (projectDetailsEl) {
            projectDetailsEl.textContent = `Detailed information about ${title}...`;
        }

        if (projectGalleryEl) {
            fetch('../projects.json')
                .then(response => response.json())
                .then(projects => {
                    projects.forEach(project => {
                        if (project.title === title) {
                            if (projectDetailsEl) {
                                projectDetailsEl.textContent = project.desc || `Detailed information about ${title}...`;
                            }
                            if (projectGalleryEl) {
                                project.gallery.forEach(galleryItem => {
                                    const img = document.createElement('img');
                                    img.src = galleryItem.image;
                                    img.className = 'gallery-image';
                                    projectGalleryEl.appendChild(img);
                                });
                            }
                        }
                    });
                })
                .catch(error => console.error('Error loading project images:', error));
        }
    }

    // portfolio image modal
    function loadProjectImages() {
        const projectGalleryEl = document.getElementById('project-gallery');
        if (projectGalleryEl) {
            fetch('path/to/your/project/data.json')
                .then(response => response.json())
                .then(data => {
                    data.projects.forEach(project => {
                        if (projectGalleryEl) {
                            project.gallery.forEach(galleryItem => {
                                const img = document.createElement('img');
                                img.src = galleryItem.image;
                                img.className = 'gallery-image';
                                projectGalleryEl.appendChild(img);
                            });
                        }
                    });
                })
                .catch(error => console.error('Error loading project images:', error));
        }
    }

    // Call the function to load project images
    loadProjectImages();

    // Portfolio image modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image'); // Define modalImg here
    const closeBtn = document.querySelector('.image-modal .close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;
    let images = [];

    // Function to open the modal
    function openModal(index) {
        if (images.length > 0 && index >= 0 && index < images.length) {
            modal.style.display = 'block';
            modalImg.src = images[index].src;
            currentIndex = index;
        }
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Function to show the previous image
    function showPrevImage() {
        if (images.length > 0) {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            modalImg.src = images[currentIndex].src;
        }
    }

    // Function to show the next image
    function showNextImage() {
        if (images.length > 0) {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            modalImg.src = images[currentIndex].src;
        }
    }

    // Add event listeners to dynamically created images
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('gallery-image')) {
            images = document.querySelectorAll('.gallery-image');
            const index = Array.from(images).indexOf(event.target);
            openModal(index);
        }
    });

    // Add event listeners to modal controls
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close modal when clicking outside of the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formStatus.textContent = '';
            formStatus.className = '';

            const formData = new FormData(contactForm);

            fetch('https://formsubmit.co/ajax/rezanaeimabadi7@gmail.com', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success === "true" || data.success === true) {
                        formStatus.textContent = "Thank you! Your message has been sent successfully.";
                        formStatus.className = "success-message";
                        formStatus.style.color = "green";
                        formStatus.style.marginTop = "10px";
                        contactForm.reset();
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    formStatus.textContent = "Oops! Something went wrong. Please try again later.";
                    formStatus.className = "error-message";
                    formStatus.style.color = "red";
                    formStatus.style.marginTop = "10px";
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send';
                });
        });
    }

}); 