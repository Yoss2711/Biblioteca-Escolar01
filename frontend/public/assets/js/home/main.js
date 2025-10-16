import { supabaseClient } from './config/supabase-config.js';

document.addEventListener('DOMContentLoaded', async () => {
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

    // --- Manejo de sesión de usuario ---
    const loginButton = document.querySelector('.btn-login');
    const profileMenu = document.querySelector('.profile-menu');
    const searchForm = document.querySelector('.search-bar');
    const searchInfo = document.querySelector('.search-info-text');

    try {
        const { data: { session } } = await supabaseClient.auth.getSession();

        if (session && session.user) {
            // Usuario logueado
            const user = session.user;

            // 1. Ocultar botón de login y mostrar menú de perfil
            if (loginButton) {
                loginButton.style.display = 'none';
            }
            if (profileMenu) {
                profileMenu.style.display = 'flex';

                // 2. Poblar datos del usuario
                const avatarUrl = user.user_metadata?.avatar_url || 'assets/img/default-avatar.png'; // Usa un avatar por defecto
                document.getElementById('profile-avatar').src = avatarUrl;
                document.getElementById('profile-email').textContent = user.email;

                // 3. Lógica para abrir/cerrar el dropdown
                const profileToggle = profileMenu.querySelector('.profile-toggle');
                profileToggle.addEventListener('click', () => {
                    profileMenu.classList.toggle('open');
                });

                // 4. Lógica para cerrar sesión
                const logoutLink = document.getElementById('logout-link');
                logoutLink.addEventListener('click', async (e) => {
                    e.preventDefault();
                    await supabaseClient.auth.signOut();
                    window.location.reload();
                });

                // Cerrar dropdown si se hace clic fuera
                document.addEventListener('click', (e) => {
                    if (!profileMenu.contains(e.target)) {
                        profileMenu.classList.remove('open');
                    }
                });
            }

            // Habilitar búsqueda
            if (searchForm) {
                searchForm.onsubmit = (e) => {
                    e.preventDefault();
                    const query = searchForm.querySelector('input').value;
                    // Redirigir a la página de búsqueda del dashboard (ajusta la URL si es necesario)
                    window.location.href = `../../src/pages/dashboard/index.html?search=${encodeURIComponent(query)}`;
                };
            }
            if (searchInfo) {
                searchInfo.textContent = '¡Bienvenido! Realiza una búsqueda en nuestro catálogo.';
            }

        } else {
            // Usuario no logueado
            if (loginButton) {
                loginButton.style.display = 'block';
            }
            if (searchForm) {
                searchForm.onsubmit = () => {
                    showLoginPrompt();
                    return false;
                };
            }
        }
    } catch (e) {
        console.error('Error al verificar la sesión:', e);
    }

    // --- Función para prompt de login (código existente) ---
    function showLoginPrompt() { // Esta función es llamada cuando un usuario no logueado intenta buscar
        if (confirm('Para acceder al sistema completo necesitas iniciar sesión. ¿Deseas ir al login?')) {
            window.location.href = 'auth.php'; // Redirige a la página de autenticación
        }
    }
});
