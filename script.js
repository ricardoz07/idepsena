console.log("Página cargada correctamente");
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active'); // Agrega o quita la clase 'active' para mostrar/ocultar el menú
    if (nav.style.display === "block") {
        nav.style.display = "none"; // Oculta el menú si ya está abierto
    } else {
        nav.style.display = "block"; // Muestra el menú
    }
});