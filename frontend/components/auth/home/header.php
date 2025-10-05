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
            <a href="#" class="btn-login">Ingresar</a>
            <button class="menu-toggle" aria-label="Abrir menú">☰</button>
        </nav>
    </div>
</header>