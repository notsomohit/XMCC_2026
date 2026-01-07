document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.getElementById('navList');

    function toggleMenu() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('open');
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (navList) {
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    toggleMenu(); 
                }
            });
        });
    }

});