<template>
  <div id="app" class="app-wrapper">
    <LoadingSpinner v-if="isLoading" />
    <nav class="navbar-custom">
      <div
        class="container-fluid d-flex justify-content-between align-items-center"
      >
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="fas fa-house me-2"></i>
          <span>Sistema de votaciones</span>
        </router-link>
      </div>
    </nav>

    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <footer class="footer text-center">
      <small class="text-white">
        © 2025 Sistema de Votaciones Residencial
        <span class="d-block">
          <i class="fas fa-laptop-code me-2"></i>
          Desarrollado por:
          <strong>Jose Trespalacios</strong>
        </span>
        <span class="d-block">
          <a
            href="https://www.linkedin.com/in/josetrespalaciosb/"
            target="_blank"
            class="text-white footer-link"
          >
            <i class="fab fa-linkedin me-2"></i>
            /in/josetrespalaciosb/
          </a>
        </span>
        <span class="d-block">
          <a
            href="https://github.com/josetrespalaciosbedoya"
            target="_blank"
            class="text-white footer-link me-3"
          >
            <i class="fab fa-github me-2"></i>
            josetrespalaciosbedoya (Cuenta principal)
          </a>
          <a
            href="https://github.com/josetresdev"
            target="_blank"
            class="text-white footer-link"
          >
            <i class="fab fa-github me-2"></i>
            josetresdev (Cuenta alternativa)
          </a>
        </span>
        <div class="mt-2">
          <a
            href="mailto:josetrespalaciosbedoya@gmail.com"
            target="_blank"
            class="text-white footer-link"
          >
            <i class="fas fa-envelope me-2"></i>
            josetrespalaciosbedoya@gmail.com
          </a>
        </div>
      </small>
    </footer>
  </div>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner.vue';

export default {
  name: 'App',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  watch: {
    $route() {
      this.isLoading = true;
    },
  },
  created() {
    this.$router.afterEach(() => {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/App.scss';
</style>
