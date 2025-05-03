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
              <label for="email" class="form-label">
                <i class="fas fa-envelope me-2"></i> Correo electrónico
              </label>
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
              <label for="password" class="form-label">
                <i class="fas fa-key me-2"></i> Contraseña
              </label>
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
            <router-link
              to="/administrador/panel"
              class="btn btn-secondary mb-2"
            >
              <i class="fas fa-cogs me-2"></i>
              Ir a la vista de administrador
            </router-link>
            <router-link to="/cliente/panel" class="btn btn-secondary">
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
@import '@/assets/styles/auth/Login.scss';
</style>
