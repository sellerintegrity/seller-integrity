document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle Logic
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu automatically when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Expert Help Auto-Select Logic
    const summonButtons = document.querySelectorAll('.btn-summon');
    const guardianSelect = document.getElementById('guardian-select');

    summonButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get the specific division requested from the card's data attribute
            const serviceRequested = e.target.getAttribute('data-service');
            
            if(guardianSelect && serviceRequested) {
                // Look through the dropdown options and select the matching division
                Array.from(guardianSelect.options).forEach(option => {
                    if(option.text.includes(serviceRequested)) {
                        guardianSelect.value = option.value;
                    }
                });
            }
        });
    });
});