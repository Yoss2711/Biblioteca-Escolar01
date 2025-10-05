<div class="form-container">
    <!-- Login Form -->
    <div class="form-section active" id="loginForm">
        <form id="loginFormElement">
            <div class="input-group">
                <label for="loginEmail">Email</label>
                <input type="email" id="loginEmail" required placeholder="ejemplo@correo.com">
            </div>
            <div class="input-group">
                <label for="loginPassword">Contraseña</label>
                <input type="password" id="loginPassword" required placeholder="Tu contraseña">
            </div>
            <button type="submit" class="btn btn-primary">
                Iniciar Sesión
                <span class="loading" style="display: none;"></span>
            </button>
        </form>
    </div>

    <!-- Register Form -->
    <div class="form-section" id="registerForm">
        <form id="registerFormElement">
            <div class="input-group">
                <label for="registerName">Nombre completo</label>
                <input type="text" id="registerName" required placeholder="Tu nombre completo">
            </div>
            <div class="input-group">
                <label for="registerEmail">Email</label>
                <input type="email" id="registerEmail" required placeholder="ejemplo@correo.com">
            </div>
            <div class="input-group">
                <label for="registerPassword">Contraseña</label>
                <input type="password" id="registerPassword" required placeholder="Mínimo 6 caracteres">
            </div>
            <div class="input-group">
                <label for="userType">Tipo de usuario</label>
                <select id="userType" required>
                    <option value="">Selecciona tipo de usuario</option>
                    <option value="student">Estudiante</option>
                    <option value="teacher">Profesor</option>
                    <option value="admin">Administrador</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">
                Crear Cuenta
                <span class="loading" style="display: none;"></span>
            </button>
        </form>
    </div>
</div>