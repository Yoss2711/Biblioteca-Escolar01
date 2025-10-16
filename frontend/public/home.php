<?php
// Definir la ruta raíz del proyecto y la URL base para includes y assets consistentes.
define('ROOT_PATH', dirname(__DIR__)); // Apunta a la carpeta 'frontend'
define('BASE_URL', '/Biblioteca-escolar01/frontend/public/');

// Configuración inicial
$pageTitle = "Biblioteca Virtual - Colegio María Inmaculada";
$pageDescription = "Descubre un mundo infinito de conocimiento";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <?php include ROOT_PATH . '/components/auth/home/head.php'; ?>
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/home.css">
    <title><?php echo $pageTitle; ?></title>
</head>
<body>
    <?php include ROOT_PATH . '/components/auth/home/header.php'; ?>
    
    <main>
    <?php include ROOT_PATH . '/components/auth/home/hero-section.php'; ?>
    <?php include ROOT_PATH . '/components/auth/home/catalog-preview.php'; ?>
    <?php include ROOT_PATH . '/components/auth/home/services-section.php'; ?>
    <?php include ROOT_PATH . '/components/auth/home/about-us.php'; ?>
    <?php include ROOT_PATH . '/components/auth/home/contact-section.php'; ?>
    </main>

    <?php include ROOT_PATH . '/components/auth/home/footer.php'; ?>

    <script src="<?php echo BASE_URL; ?>assets/js/home/session.js?v=<?php echo filemtime(ROOT_PATH . '/public/assets/js/home/session.js'); ?>" type="module"></script>
    <script src="<?php echo BASE_URL; ?>assets/js/home/main.js?v=<?php echo filemtime(ROOT_PATH . '/public/assets/js/home/main.js'); ?>" type="module"></script>
</body>
</html>