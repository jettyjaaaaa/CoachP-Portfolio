document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                if (window.location.hash !== `#${sectionId}`) {
                    window.history.pushState({}, '', `#${sectionId}`);
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
