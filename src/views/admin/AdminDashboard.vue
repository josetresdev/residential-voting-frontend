<template>
  <div class="admin-dashboard">
    <Sidebar />
    <main class="main-content">
      <h1 class="dashboard-title">
        <i class="fas fa-tools me-2"></i> Panel de administración
      </h1>
      <p class="dashboard-subtitle">
        Accede y administra todos los elementos clave del sistema de votación de
        manera centralizada y eficiente.
      </p>

      <div class="dashboard-grid">
        <router-link to="/administrador/usuarios" class="dashboard-card">
          <i class="fas fa-users card-icon"></i>
          <h2 class="card-title">Gestión de usuarios</h2>
          <p class="card-description">
            Agrega, edita o elimina cuentas de votantes y administradores
            registrados en el sistema.
          </p>
        </router-link>

        <router-link to="/administrador/preguntas" class="dashboard-card">
          <i class="fas fa-question-circle card-icon"></i>
          <h2 class="card-title">Gestión de preguntas</h2>
          <p class="card-description">
            Crea y administra las preguntas que serán presentadas durante las
            sesiones de votación.
          </p>
        </router-link>

        <router-link to="/administrador/opciones" class="dashboard-card">
          <i class="fas fa-list-ul card-icon"></i>
          <h2 class="card-title">Gestión de opciones</h2>
          <p class="card-description">
            Define y organiza las opciones de respuesta disponibles para cada
            pregunta activa.
          </p>
        </router-link>

        <router-link
          to="/administrador/sesiones-votacion"
          class="dashboard-card"
        >
          <i class="fas fa-calendar-alt card-icon"></i>
          <h2 class="card-title">Sesiones de votación</h2>
          <p class="card-description">
            Programa, habilita y gestiona las sesiones de votación activas y
            finalizadas.
          </p>
        </router-link>

        <router-link to="/administrador/resultados" class="dashboard-card">
          <i class="fas fa-chart-pie card-icon"></i>
          <h2 class="card-title">Resultados</h2>
          <p class="card-description">
            Consulta y analiza los resultados obtenidos al cierre de las
            sesiones de votación.
          </p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'AdminDashboard',
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/AdminDashboard.scss';
</style>
