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
          <router-link to="/iniciar-sesion" class="btn btn-primary">
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
@import '@/assets/styles/Home.scss';
</style>
