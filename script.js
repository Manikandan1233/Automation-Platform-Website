document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
