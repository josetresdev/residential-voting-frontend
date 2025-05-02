<template>
  <div id="app" class="app-wrapper">
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
      <router-view />
    </main>

    <footer class="footer text-center">
      <small class="text-white">
        © 2025 Sistema de Votaciones Residencial
        <span class="d-block">
          <i class="fas fa-laptop-code me-2"></i>
          Desarrollado por:
          <span>
            <strong>Jose Trespalacios</strong>
          </span>
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
export default {
  name: 'App',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/App.scss';

#app,
.app-wrapper {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navbar-custom {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  padding: 0.75rem 1rem;
  color: white;
  box-shadow: none;
  border-radius: 0 0 16px 16px;

  .container-fluid {
    width: 100%;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .navbar-brand {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: opacity 0.3s ease;

    i {
      margin-right: 0.5rem;
      font-size: 1rem;
    }

    &:hover {
      opacity: 0.9;
    }
  }
}

.main-content {
  flex-grow: 1;
  padding: 2rem 1rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  width: 90%;
  margin: 0 auto;
  max-width: 1140px;
}

.footer {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  text-align: center;
  padding: 1em;
  color: white;
  font-size: 0.8rem; /* Adjusted for footer */
  box-shadow: none;
  border-radius: 16px 16px 0 0;
  width: 100%;
}

.footer-link {
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;

  i {
    font-size: 1.2rem;
  }

  &:hover {
    color: #9c79e6;
    transform: scale(1.1);
  }
}

.me-2 {
  margin-right: 0.5rem;
}

.mt-2 {
  margin-top: 1rem;
}

@media (max-width: 767px) {
  .footer-link {
    display: block;
    margin-bottom: 0.5rem;
  }
}
</style>
