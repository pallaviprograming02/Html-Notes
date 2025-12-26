// Switch sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.note-section');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.dataset.target;

        // Active button
        navLinks.forEach(btn => btn.classList.remove('active'));
        link.classList.add('active');

        // Show matching section
        sections.forEach(sec => {
            sec.classList.toggle('active', sec.id === targetId);
        });
    });
});

// Simple dark / light toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});