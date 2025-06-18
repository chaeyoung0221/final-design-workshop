const dots = document.querySelectorAll('.dot');
const sections = 5;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight - windowHeight;
    const sectionHeight = totalHeight / (sections - 1);
    const index = Math.min(Math.floor(scrollPosition / sectionHeight), sections - 1);

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
});
