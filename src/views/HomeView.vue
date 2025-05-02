<template>
  <div class="home-custom">
    <div class="card">
      <div class="card-header">
        <i class="fas fa-vote-yea me-2"></i>
        Sistema de votaciones residencial
      </div>
      <div class="card-body">
        <h2 class="section-title">Bienvenido al sistema de votaciones</h2>
        <p class="text-muted">
          Plataforma diseñada para facilitar la participación activa de los
          propietarios en decisiones comunitarias. Los usuarios pueden emitir
          votos de manera segura, gestionar preguntas y opciones de votación, y
          visualizar resultados en tiempo real.
        </p>
        <p class="text-muted">
          Desarrollado con <strong>Laravel 11</strong> y
          <strong>Vue.js</strong>, el sistema ofrece una solución moderna,
          escalable y fácil de usar para todos los miembros de la comunidad.
        </p>

        <h2 class="section-title">Características principales</h2>
        <p class="text-muted">
          <strong>Gestión de usuarios:</strong> Registro y autenticación de
          propietarios para un acceso seguro al sistema.
        </p>
        <p class="text-muted">
          <strong>Administración de votaciones:</strong> Creación dinámica de
          preguntas y opciones para las votaciones.
        </p>
        <p class="text-muted">
          <strong>Votación segura:</strong> Proceso de emisión de votos con un
          control de acceso riguroso.
        </p>
        <p class="text-muted">
          <strong>Resultados en tiempo real:</strong> Visualización inmediata de
          los votos emitidos y resultados parciales.
        </p>
        <p class="text-muted">
          <strong>Panel administrativo:</strong> Herramientas centralizadas para
          gestionar usuarios y votaciones.
        </p>

        <div class="text-center mt-4">
          <router-link to="/login" class="btn btn-primary">
            <i class="fas fa-circle-check"></i>
            <span>Entrar al sistema de votación</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped lang="scss">
body,
html,
#app,
.app-wrapper {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #ffffff;
}

.app-wrapper {
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.home-custom {
  background-color: #ffffff;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  height: 100% !important;
}

.card {
  width: 100%;
  max-width: 1150px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #ffffff;
  margin-bottom: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.card-header {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  color: #ffffff;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem;
  border-radius: 16px 16px 0 0;
}

.card-body {
  padding: 1.5rem;
  color: #6c757d;
  min-height: 60vh;
  overflow: hidden;
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
  margin-bottom: 1rem;
  color: #6c757d;
}

ul li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4b5563;
}

.btn {
  font-size: 0.875rem;
  padding: 0.65rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 280px;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(43, 10, 65, 0.15);
}

.btn-primary {
  background: linear-gradient(135deg, #5e3ea1, #2b0a41);
  color: #ffffff;
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #7d5fc4, #3e1f60);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(43, 10, 65, 0.3);
}

@media (max-width: 767px) {
  .card {
    width: 100%;
  }
}
</style>
