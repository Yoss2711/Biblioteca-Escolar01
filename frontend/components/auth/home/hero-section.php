<!-- components/auth/home/hero-section.php -->
<section id="inicio" class="hero section bubbles">
    <div class="container reveal">
        <h1>Tu Aventura del Conocimiento Comienza Aquí</h1>
        <p>
            Explora un universo de libros, recursos digitales y herramientas de aprendizaje. La Biblioteca Virtual del Colegio María Inmaculada es tu puerta de entrada al saber.
        </p>
        
        <!-- Barra de búsqueda funcional -->
        <form class="search-bar" onsubmit="showLoginPrompt(); return false;">
            <input type="text" class="search-input" placeholder="Busca un libro, autor o tema...">
            <button type="submit" class="search-btn">Buscar</button>
        </form>

        <p class="text-sm" style="color: var(--color-text-light);">Para buscar, necesitas ingresar al sistema.</p>
    </div>

    <!-- Elementos para la animación de burbujas -->
    <?php for ($i = 0; $i < 7; $i++) echo '<div class="bubble"></div>'; ?>
</section>
<!-- DEBUG: hero-section.php OK -->
