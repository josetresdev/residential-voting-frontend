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
        <router-link to="/admin/users" class="dashboard-card">
          <i class="fas fa-users card-icon"></i>
          <h2 class="card-title">Gestión de usuarios</h2>
          <p class="card-description">
            Agrega, edita o elimina cuentas de votantes y administradores
            registrados en el sistema.
          </p>
        </router-link>

        <router-link to="/admin/questions" class="dashboard-card">
          <i class="fas fa-question-circle card-icon"></i>
          <h2 class="card-title">Gestión de preguntas</h2>
          <p class="card-description">
            Crea y administra las preguntas que serán presentadas durante las
            sesiones de votación.
          </p>
        </router-link>

        <router-link to="/admin/options" class="dashboard-card">
          <i class="fas fa-list-ul card-icon"></i>
          <h2 class="card-title">Gestión de opciones</h2>
          <p class="card-description">
            Define y organiza las opciones de respuesta disponibles para cada
            pregunta activa.
          </p>
        </router-link>

        <router-link to="/admin/sessions" class="dashboard-card">
          <i class="fas fa-calendar-alt card-icon"></i>
          <h2 class="card-title">Sesiones de votación</h2>
          <p class="card-description">
            Programa, habilita y gestiona las sesiones de votación activas y
            finalizadas.
          </p>
        </router-link>

        <router-link to="/admin/results" class="dashboard-card">
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
// Modificar la ruta de importación del Sidebar
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'AdminDashboard',
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.admin-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f7f8f9;

  .main-content {
    flex-grow: 1;
    margin-left: 72px; /* Espaciado respecto al sidebar */
    padding: 2rem;

    .dashboard-title {
      font-size: 2rem;
      font-weight: 700;
      color: #2b0a41;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .dashboard-subtitle {
      font-size: 1.05rem;
      text-align: center;
      color: #6c6c85;
      margin-bottom: 2rem;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
    }

    .dashboard-card {
      background-color: #ffffff;
      border: 1px solid #c9c3ff;
      border-radius: 16px;
      padding: 2rem 1.25rem;
      text-align: center;
      text-decoration: none;
      color: #2b0a41;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
      }

      .card-icon {
        font-size: 2.2rem;
        color: #856ca0;
        margin-bottom: 0.8rem;
      }

      .card-title {
        font-size: 1.05rem;
        font-weight: 600;
        color: #2b0a41;
        margin-bottom: 0.5rem;
      }

      .card-description {
        font-size: 0.9rem;
        color: #666690;
        line-height: 1.4;
      }
    }
  }
}
</style>
