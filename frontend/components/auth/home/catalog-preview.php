<!-- components/auth/home/catalog-preview.php -->
<section id="catalogo" class="section">
    <div class="container">
        <h2 class="section-title reveal">Explora Nuestro Catálogo</h2>
        <p class="section-sub reveal">
            Descubre las últimas adquisiciones y los títulos más populares entre los estudiantes. Hay un libro esperando
            por ti.
        </p>

        <?php
        // Datos de ejemplo. Esto debería venir de tu base de datos.
        $preview_books = [
            ['title' => 'Cien Años de Soledad', 'author' => 'Gabriel García Márquez', 'image' => 'Cien_años-de-soledad.jpg'],
            ['title' => 'Don Quijote', 'author' => 'Miguel de Cervantes', 'image' => 'Don-quijote.png'],
            ['title' => 'La Sombra del Viento', 'author' => 'Carlos Ruiz Zafón', 'image' => 'La-sombra-del-viento.png'],
        ];
        ?>

        <div class="catalog-cards">
            <div class="cards">
                <?php foreach ($preview_books as $index => $book): ?>
                    <div style="transition-delay: <?php echo $index * 0.2; ?>s;">
                        <?php
                        // Pasamos la variable $book al scope del include
                        include __DIR__ . '/../../../src/views/partials/book-card-preview.php';
                        ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

    </div>
</section>