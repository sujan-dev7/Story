window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;
    const loaderProgress = document.querySelector('.loader-progress');
    const loaderShip = document.querySelector('.loader-ship');
    const loaderBar = document.querySelector('.loader-bar');

    let progress = 0;
    const interval = setInterval(() => {
        progress += 5; // Increment progress
        if (progress <= 100) {
            loaderProgress.style.width = `${progress}%`;
            // Calculate ship position based on progress, ensuring it stays within the bar
            const shipPosition = (loaderBar.offsetWidth - loaderShip.offsetWidth) * (progress / 100);
            loaderShip.style.left = `${shipPosition}px`;
        } else {
            clearInterval(interval);
        }
    }, 100); // Update every 100ms

    // Phase 1: Fade out Preloader to reveal the "Blank" Splash Screen
    setTimeout(() => {
        preloader.classList.add('fade-out');
        body.classList.remove('loading');
        
        // Phase 2: After the splash screen intro, reveal the rest of the site content
        // This makes the splash screen feel like a clean starting point
        setTimeout(() => {
            body.classList.add('content-ready');
            preloader.style.display = 'none';
        }, 1000); 
    }, 2500); 
});

document.addEventListener('DOMContentLoaded', () => {
    const crewMembers = document.querySelectorAll('.crew-member');
    const crewModal = document.getElementById('crew-modal');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = crewModal.querySelector('.close-button');
    const modalOverlay = crewModal.querySelector('.modal-overlay');

    crewMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.querySelector('h3').textContent;
            const role = member.querySelector('p').textContent;

            // Populate modal with content from the clicked card
            modalName.textContent = name;
            modalRole.textContent = role;
            // Placeholder for more detailed description
            modalDescription.textContent = `This is a placeholder for more detailed information about ${name}, the ${role}.`;

            // Show the modal
            crewModal.classList.add('active');
        });
    });

    // Function to close the modal
    const closeModal = () => {
        crewModal.classList.remove('active');
    };

    // Close modal when close button is clicked
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside the content (overlay)
    modalOverlay.addEventListener('click', closeModal);

    // Close modal when Escape key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && crewModal.classList.contains('active')) {
            closeModal();
        }
    });
});
