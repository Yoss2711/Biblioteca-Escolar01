<?php
// public/asset.php

// Medida de seguridad: solo permitir archivos de las carpetas 'css' y 'js'.
if (!isset($_GET['file']) || strpos($_GET['file'], '..') !== false) {
    http_response_code(400);
    echo "Solicitud inválida.";
    exit;
}

$filePath = __DIR__ . '/' . $_GET['file'];

// Verificar que el archivo exista
if (!file_exists($filePath)) {
    http_response_code(404);
    echo "Archivo no encontrado.";
    exit;
}

// Determinar el Content-Type correcto basado en la extensión
$extension = pathinfo($filePath, PATHINFO_EXTENSION);
$contentType = '';

switch ($extension) {
    case 'css':
        $contentType = 'text/css';
        break;
    case 'js':
        $contentType = 'text/javascript';
        break;
    default:
        http_response_code(403);
        echo "Tipo de archivo no permitido.";
        exit;
}

// Enviar el encabezado correcto y el contenido del archivo
header("Content-Type: $contentType; charset=utf-8");
readfile($filePath);