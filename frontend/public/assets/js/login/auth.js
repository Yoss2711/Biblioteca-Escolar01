// Configuración
import { supabaseClient } from '../config/supabase-config.js';
import { TabManager } from '../modules/tab-manager.js';
import { AuthManager } from '../modules/auth-manager.js';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const authManager = new AuthManager();
    const tabManager = new TabManager();
    authManager.init();
    tabManager.init();
});