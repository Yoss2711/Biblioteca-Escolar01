// Importamos el cliente de Supabase
import { supabaseClient } from '../../../../public/assets/js/config/supabase-config.js';

/**
 * Esta función se ejecuta inmediatamente para proteger la página.
 * Verifica si hay una sesión de usuario activa. Si no la hay,
 * redirige al usuario a la página de login.
 */
(async () => {
    // Obtenemos la sesión actual
    const { data: { session }, error } = await supabaseClient.auth.getSession();

    if (error) {
        console.error('Error al obtener la sesión:', error);
        return;
    }

    if (!session) {
        // Si no hay sesión, redirigimos a la página de login
        window.location.href = '/Biblioteca-escolar01/frontend/public/index.php';
    }
})();