document.addEventListener('DOMContentLoaded', () => {

    // --- Animación de revelado al hacer scroll ---
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar el elemento una vez que es visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // --- Menú de navegación móvil ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Cambio de estilo del header al hacer scroll ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Función para prompt de login (código existente) ---
    window.showLoginPrompt = function() {
        if (confirm('Para acceder al sistema completo necesitas iniciar sesión. ¿Deseas ir al login?')) {
            window.location.href = 'auth.php';
            // Redirige a la raíz del sitio, que cargará index.php (login)
            window.location.href = '/Biblioteca-escolar01/frontend/public/';
        }
    }
});