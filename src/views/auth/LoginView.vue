<template>
  <div class="login-view">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-sign-in-alt me-2"></i>
          Iniciar sesión
        </div>
        <div class="card-body">
          <h2 class="section-title">Bienvenido al sistema de votación</h2>
          <p class="text-muted">
            Por favor, ingrese sus credenciales para acceder al sistema.
          </p>

          <!-- Formulario de inicio de sesión -->
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
              <button type="submit" class="btn btn-primary mb-3">
                Iniciar sesión
              </button>
            </div>
          </form>

          <!-- Botones para acceder como administrador o cliente -->
          <div class="text-center mt-3">
            <router-link to="/admin/dashboard" class="btn btn-primary mb-3">
              Ir a la vista de administrador
            </router-link>
            <router-link to="/client/dashboard" class="btn btn-secondary">
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
      // Aquí puedes manejar la lógica para autenticar al usuario
      console.log('Formulario enviado', this.email, this.password);
      // Ejemplo de redirección después de enviar el formulario (suponiendo autenticación exitosa)
      this.$router.push('/client/dashboard'); // Redirige al dashboard del cliente
    },
  },
};
</script>

<style scoped lang="scss">
.login-view {
  margin-top: 3rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 450px; /* Aumento del ancho del card */
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* Sombra más suave */
  border: none;
}

.card-header {
  background-color: #2b0a41;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem; /* Reducción del tamaño de la fuente */
  font-weight: 600;
  padding: 1rem;
  border-radius: 14px 14px 0 0;
}

.card-body {
  padding: 1.5rem;
  background-color: #ffffff;
}

.section-title {
  font-size: 1.125rem; /* Reducción del tamaño de la fuente */
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c9c3ff;
  padding-bottom: 0.5rem;
}

.text-muted {
  font-size: 0.875rem; /* Fuente más pequeña */
  margin-bottom: 1.5rem;
  color: #6c757d;
}

.form-label {
  font-weight: 600;
  color: #2b0a41;
  font-size: 0.875rem; /* Fuente más pequeña */
}

.form-control {
  border-radius: 8px;
  border: 1px solid #c9c3ff;
  padding: 0.75rem; /* Más espacio interno en los campos */
  font-size: 0.875rem; /* Fuente más pequeña */
}

.btn {
  font-size: 0.875rem; /* Reducción del tamaño de la fuente */
  padding: 0.6rem 1.2rem; /* Tamaño ajustado */
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 320px; /* Ajuste en el ancho de los botones */
}

.btn-primary {
  background-color: #2b0a41;
  border-color: #2b0a41;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #856ca0;
  border-color: #856ca0;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #ffffff;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.mb-3 {
  margin-bottom: 0.75rem; /* Menos espacio entre los botones */
}
</style>
