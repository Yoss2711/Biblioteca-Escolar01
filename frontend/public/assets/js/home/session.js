// assets/js/home/session.js

console.log('session.js cargado');

function isUserLoggedIn() {
    const token = sessionStorage.getItem('authToken');
    return token ? true : false;
}

function initializeSessionUI() {
    console.log('Inicializando UI de sesión...');
    
    const loginBtn = document.getElementById('loginBtn');
    const profileMenu = document.getElementById('profileMenu');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const profileAvatar = document.getElementById('profileAvatar');
    
    if (isUserLoggedIn()) {
        console.log('Usuario logueado - mostrando perfil');
        
        if (loginBtn) loginBtn.style.display = 'none';
        if (profileMenu) profileMenu.style.display = 'block';
        
        // Obtener datos del usuario
        const name = sessionStorage.getItem('userName') || 'Usuario';
        const email = sessionStorage.getItem('userEmail') || 'usuario@escuela.edu';
        
        if (userName) userName.textContent = name;
        if (userEmail) userEmail.textContent = email;
        
        // Generar iniciales para avatar
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        if (profileAvatar) profileAvatar.textContent = initials || 'U';
        
    } else {
        console.log('Usuario NO logueado - mostrando login');
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (profileMenu) profileMenu.style.display = 'none';
    }
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    if (profileMenu) {
        profileMenu.classList.toggle('active');
    }
}

function logout() {
    console.log('Ejecutando logout...');
    
    // Limpiar sessionStorage
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
    
    // Redirigir al login
    setTimeout(() => {
        window.location.href = '/Biblioteca-escolar01/frontend/src/pages/login/index.php';
    }, 300);
}

function showLogoutConfirm() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        logout();
    }
}

// Cerrar menú cuando se hace clic fuera
document.addEventListener('click', (e) => {
    const profileMenu = document.getElementById('profileMenu');
    const profileBtn = document.getElementById('profileBtn');
    
    if (profileMenu && !profileMenu.contains(e.target) && e.target !== profileBtn) {
        profileMenu.classList.remove('active');
    }
});

// Cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM listo');
    
    initializeSessionUI();
    
    // Click en avatar para abrir/cerrar menú
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleProfileMenu();
        });
    }
    
    // Click en logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showLogoutConfirm();
        });
    }
});/*  */

// También ejecutar al cargar
initializeSessionUI();