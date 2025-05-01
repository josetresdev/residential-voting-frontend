<template>
  <div class="admin-dashboard">
    <div class="container">
      <h1 class="dashboard-title">
        <i class="fas fa-tools me-2"></i> Panel de Administración
      </h1>

      <div class="dashboard-grid">
        <router-link to="/admin/users" class="dashboard-card">
          <i class="fas fa-users card-icon"></i>
          <span>Usuarios</span>
        </router-link>

        <router-link to="/admin/questions" class="dashboard-card">
          <i class="fas fa-question-circle card-icon"></i>
          <span>Preguntas</span>
        </router-link>

        <router-link to="/admin/options" class="dashboard-card">
          <i class="fas fa-list-ul card-icon"></i>
          <span>Opciones</span>
        </router-link>

        <router-link to="/admin/sessions" class="dashboard-card">
          <i class="fas fa-calendar-alt card-icon"></i>
          <span>Sesiones</span>
        </router-link>

        <router-link to="/admin/results" class="dashboard-card">
          <i class="fas fa-chart-pie card-icon"></i>
          <span>Resultados</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>

<style scoped lang="scss">
.admin-dashboard {
  padding: 2rem 0;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .dashboard-title {
    font-size: 2rem;
    font-weight: 700;
    color: #2b0a41;
    text-align: center;
    margin-bottom: 2.5rem;
    border-bottom: 3px solid #c9c3ff;
    padding-bottom: 1rem;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }

  .dashboard-card {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 2rem 1rem;
    text-align: center;
    text-decoration: none;
    color: #2b0a41;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    }

    span {
      margin-top: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
    }

    .card-icon {
      font-size: 2.5rem;
      color: #856ca0;
    }
  }
}
</style>
