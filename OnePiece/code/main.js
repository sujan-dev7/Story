window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;

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
