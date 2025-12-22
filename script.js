document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.getElementById('navList');

    // Function to toggle the mobile menu state
    function toggleMenu() {
        // Toggles the 'active' class on the navigation list (to show/hide)
        navList.classList.toggle('active');
        // Toggles the 'open' class on the hamburger button (to animate into an 'X')
        hamburger.classList.toggle('open');
    }

    // Attach event listener to the hamburger button
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close the menu when a navigation link is clicked
    if (navList) {
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close if the menu is currently active
                if (navList.classList.contains('active')) {
                    toggleMenu(); 
                }
            });
        });
    }

});