<?php
// components/auth/home/header.php

// Definimos las secciones para generar los enlaces dinámicamente
$nav_items = [
    'inicio' => 'Inicio',
    'catalogo' => 'Catálogo',
    'servicios' => 'Servicios',
    'nosotros' => 'Nosotros',
    'contacto' => 'Contacto'
];

?>
<header>
    <div class="container">
        <nav>
            <a href="#inicio" class="logo">
                <span class="logo-icon"><img src="<?php echo BASE_URL; ?>assets/img/logo_colegio.png" alt="Logo Biblioteca"></span>
                <span class="logo-text">Biblioteca Virtual</span>
            </a>
            <ul class="nav-links">
                <?php foreach ($nav_items as $id => $text): ?>
                    <li><a href="#<?php echo $id; ?>"><?php echo $text; ?></a></li>
                <?php endforeach; ?>
            </ul>
            
            <!-- Botón Ingresar (sin cambios) -->
            <a href="<?php echo rtrim(BASE_URL, '/') . '/../src/pages/dashboard/index.php'; ?>" 
               id="loginBtn" 
               class="btn-login">
                Ingresar
            </a>

            <!-- Menú de perfil (solo cuando está logueado) -->
            <div id="profileMenu" class="profile-menu" style="display: none;">
                <button id="profileBtn" class="profile-btn">
                    <span class="profile-avatar" id="profileAvatar">JT</span>
                </button>
                
                <div class="profile-dropdown">
                    <div class="profile-header">
                        <p id="userName">Usuario</p>
                        <small id="userEmail">correo@escuela.edu</small>
                    </div>
                    <hr>
                    <a href="#" class="dropdown-item">Mi perfil</a>
                    <a href="#" class="dropdown-item">Mi cuenta</a>
                    <hr>
                    <button id="logoutBtn" class="dropdown-item logout-btn">Cerrar sesión</button>
                </div>
            </div>
            
            <button class="menu-toggle" aria-label="Abrir menú">☰</button>
        </nav>
    </div>
</header>