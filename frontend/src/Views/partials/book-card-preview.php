<?php
/*
 * Componente para mostrar una tarjeta de libro en la vista previa del catálogo.
 * Espera una variable $book (array) con 'image', 'title', 'author'.
 */
?>
<div class="card reveal">
    <img src="<?php echo BASE_URL . 'assets/img/' . htmlspecialchars($book['image']); ?>" alt="Portada de <?php echo htmlspecialchars($book['title']); ?>" style="width:150px; height:220px; border-radius: 8px; margin-bottom: 1rem; object-fit: cover;">
    <h3><?php echo htmlspecialchars($book['title']); ?></h3>
    <p><?php echo htmlspecialchars($book['author']); ?></p>
</div>