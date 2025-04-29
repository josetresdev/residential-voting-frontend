<template>
  <div id="app" class="app-wrapper">
    <nav class="navbar-custom">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="fas fa-house me-2"></i> Sistema de votaciones
        </router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <small class="text-muted">© 2025 Sistema de Votaciones Residencial</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<!-- Importar el archivo SCSS -->
<style lang="scss" scoped>
@import '@/assets/styles/App.scss'; /* Ajusta la ruta según tu estructura de carpetas */
</style>
