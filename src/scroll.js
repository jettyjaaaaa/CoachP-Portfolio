document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.history.pushState({}, '', '#' + entry.target.id);
                entry.target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
