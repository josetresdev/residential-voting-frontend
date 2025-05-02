<template>
  <div class="login-view">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-user-circle me-2"></i>
          Acceso al sistema
        </div>
        <div class="card-body">
          <h2 class="section-title">Bienvenido al sistema de votación</h2>
          <p class="text-muted">
            Por favor, ingrese sus credenciales para acceder al sistema.
          </p>

          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control"
                required
                placeholder="Ingrese su correo"
              />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control"
                required
                placeholder="Ingrese su contraseña"
              />
            </div>

            <div class="text-center mt-3">
              <button type="submit" class="btn btn-gradient mb-2">
                <i class="fas fa-sign-in-alt me-2"></i>
                Iniciar sesión
              </button>
            </div>
          </form>

          <div class="text-center mt-2">
            <router-link to="/admin/dashboard" class="btn btn-secondary mb-2">
              <i class="fas fa-cogs me-2"></i>
              Ir a la vista de administrador
            </router-link>
            <router-link to="/client/dashboard" class="btn btn-secondary">
              <i class="fas fa-user me-2"></i>
              Ir a la vista de cliente
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado', this.email, this.password);
      this.$router.push('/client/dashboard');
    },
  },
};
</script>

<style scoped lang="scss">
.login-view {
  margin-top: 1.5rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 500px;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: none;
  margin-bottom: 2rem;
}

.card-header {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  color: #ffffff;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem;
  border-radius: 14px 14px 0 0;
}

.card-body {
  padding: 2rem;
  background-color: #ffffff;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c9c3ff;
  padding-bottom: 0.5rem;
}

.text-muted {
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  color: #6c757d;
}

.form-label {
  font-weight: 600;
  color: #2b0a41;
  font-size: 0.875rem;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #c9c3ff;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #5e3ea1;
  outline: none;
}

.btn {
  font-size: 0.875rem;
  padding: 0.75rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 320px;
}

.btn-gradient {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  border-color: #2b0a41;
  color: white;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #856ca0, #5e3ea1);
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.mb-2 {
  margin-bottom: 0.75rem;
}

.mb-3 {
  margin-bottom: 1rem;
}
</style>
