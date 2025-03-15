document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        hamburger.textContent = navMenu.style.display === 'block' ? '✖' : '☰';
    });

    const year = document.getElementById('year');
    const lastModified = document.getElementById('last-modified');

    year.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;
});