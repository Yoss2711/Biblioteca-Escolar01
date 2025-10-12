// Importa el cliente de Supabase
import { supabaseClient } from '../../../../public/assets/js/config/supabase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', async (e) => {
            e.preventDefault();

            console.log('Intentando cerrar sesión en Supabase...');

            // Cerrar sesión en Supabase
            const { error } = await supabaseClient.auth.signOut();

            if (error) {
                console.error('Error al cerrar sesión:', error.message);
                alert('Hubo un error al cerrar la sesión.');
                return;
            }

            console.log('Sesión cerrada correctamente en Supabase.');

            // Redirige al inicio o login (ajustado a tu estructura)
            window.location.href = '../../../../public/index.php';
        });
    } else {
        console.warn('No se encontró el botón de logout.');
    }
});
