// assets/modules/auth-manager.js
import { supabaseClient } from '../config/supabase-config.js';

export class AuthManager {
    constructor() {
        this.currentUser = null;
        this.statusMessage = document.getElementById('statusMessage');
        this.userInfo = document.getElementById('userInfo');
        this.forms = document.querySelectorAll('.form-section');
        this.tabs = document.querySelectorAll('.tab');
    }

    init() {
        this.bindLoginForm();
        this.bindRegisterForm();
        this.bindLogoutBtn();
        this.checkExistingSession();
    }

    // -------- LOGIN --------
    bindLoginForm() {
        const form = document.getElementById('loginFormElement');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            this.showLoading(button);

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

            this.hideLoading(button);

            if (error) {
                this.showMessage('Email o contraseña incorrectos', 'error');
                console.error(error.message);
            } else {
                this.currentUser = data.user;
                this.showMessage('¡Inicio de sesión exitoso!', 'success');
                window.location.href = "home.php"; // 🔥 redirección
            }
        });
    }

    // -------- REGISTRO --------
    bindRegisterForm() {
        const form = document.getElementById('registerFormElement');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            this.showLoading(button);

            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const type = document.getElementById('userType').value;

            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
                options: { data: { name, type } }
            });

            this.hideLoading(button);

            if (error) {
                this.showMessage(error.message, 'error');
            } else {
                this.currentUser = data.user;
                this.showMessage('¡Cuenta creada exitosamente! Ahora inicia sesión', 'success');
                this.switchTab('login');  
                form.reset();
            }
        });
    }

    // -------- LOGOUT --------
    bindLogoutBtn() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (!logoutBtn) return;

        logoutBtn.addEventListener('click', async () => {
            await supabaseClient.auth.signOut();
            this.currentUser = null;

            document.getElementById('loginFormElement').reset();
            document.getElementById('registerFormElement').reset();

            document.querySelector('.form-tabs').style.display = 'flex';
            this.userInfo.style.display = 'none';

            this.forms.forEach(f => f.classList.remove('active'));
            this.tabs.forEach(t => t.classList.remove('active'));

            this.switchTab('login');
            this.showMessage('Sesión cerrada correctamente', 'success');
        });
    }

    // -------- SESIÓN EXISTENTE --------
    async checkExistingSession() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            // Si estamos en la página de login/index, cerramos sesión automáticamente
            await supabaseClient.auth.signOut();
            this.currentUser = null;
            this.forms.forEach(f => f.classList.remove('active'));
            this.tabs.forEach(t => t.classList.remove('active'));
            this.switchTab('login');
            this.userInfo.style.display = 'none';
        }
    }

    // -------- AUXILIARES --------
    showMessage(message, type = 'success') {
    this.statusMessage.textContent = message;
    this.statusMessage.className = `status-message show status-${type}`;
    this.statusMessage.style.display = 'block';
    setTimeout(() => this.hideMessage(), 5000);
    }

    hideMessage() {
    this.statusMessage.classList.remove('show');
    this.statusMessage.style.display = 'none';
    }

    showLoading(button) {
        const loading = button.querySelector('.loading');
        if (loading) loading.style.display = 'inline-block';
        button.disabled = true;
    }

    hideLoading(button) {
        const loading = button.querySelector('.loading');
        if (loading) loading.style.display = 'none';
        button.disabled = false;
    }

    switchTab(targetTab) {
        this.tabs.forEach(t => t.classList.remove('active'));
        this.forms.forEach(f => f.classList.remove('active'));
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}Form`).classList.add('active');
        this.hideMessage();
    }

    showUserInfo() {
        const userDetails = document.getElementById('userDetails');
        const metadata = this.currentUser.user_metadata || {};
        const typeNames = { admin: 'Administrador', teacher: 'Profesor', student: 'Estudiante' };

        if (userDetails) {
            userDetails.innerHTML = `
                <p><strong>Nombre:</strong> ${metadata.name || "Sin nombre"}</p>
                <p><strong>Email:</strong> ${this.currentUser.email}</p>
                <p><strong>Tipo:</strong> ${typeNames[metadata.type] || "No definido"}</p>
                <p><strong>ID:</strong> ${this.currentUser.id}</p>
            `;
        }

        this.forms.forEach(f => f.classList.remove('active'));
        this.tabs.forEach(t => t.classList.remove('active'));

        this.userInfo.style.display = 'block';
    }
}
