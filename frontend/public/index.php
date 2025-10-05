<?php
// Definir la ruta raíz del proyecto para includes consistentes.
define('ROOT_PATH', dirname(__DIR__)); // Apunta a la carpeta 'frontend'
define('BASE_URL', '/Biblioteca-escolar01/frontend/public/');
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/auth.css">
    <title>Sistema Biblioteca</title>
</head>

<body>
    <?php include ROOT_PATH . '/components/auth/login/decorations.php'; ?>

    <div class="container">
        <?php include ROOT_PATH . '/components/auth/login/header.php'; ?>
        <?php include ROOT_PATH . '/components/auth/login/tabs.php'; ?>
        <?php include ROOT_PATH . '/components/auth/login/status-message.php'; ?>
        <?php include ROOT_PATH . '/components/auth/login/forms.php'; ?>
        <?php include ROOT_PATH . '/components/auth/login/user-info.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script type="module" src="<?php echo BASE_URL; ?>assets/js/login/auth.js"></script>

</body>

</html> 