document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate, .animate-zoom");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");   // entra = anima
            } else {
                entry.target.classList.remove("show"); // sai = reseta
            }
        });
    }, { threshold: 0.2 });

    items.forEach(el => observer.observe(el));
});