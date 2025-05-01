<template>
  <form @submit.prevent="login" class="login-form">
    <div class="mb-3">
      <label for="email" class="form-label">Correo</label>
      <input
        v-model="email"
        type="email"
        id="email"
        class="form-control"
        required
        autocomplete="email"
      />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input
        v-model="password"
        type="password"
        id="password"
        class="form-control"
        required
        autocomplete="current-password"
      />
    </div>

    <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Credenciales inválidas o error de servidor.');
      }
    },
  },
};
</script>
