const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.onclick = () => {
    menu.classList.toggle("active");
};

// fechar ao clicar fora
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});

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