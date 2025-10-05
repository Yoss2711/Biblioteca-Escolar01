<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../public/assets/css/auth.css">
    <title>Iniciar Sesión - Sistema Biblioteca</title>
</head>

<body>
    <?php include '../../../components/auth/decorations.php'; ?>

    <div class="container">
        <?php include '../../../components/auth/login/header.php'; ?>
        <?php include '../../../components/auth/login-form.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script src="../../public/assets/js/auth.js"></script>
</body>

</html>