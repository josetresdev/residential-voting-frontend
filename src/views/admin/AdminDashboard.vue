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
  background-color: #ffffff;

  .main-content {
    flex-grow: 1;
    padding: 2rem;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
    border-radius: 12px;

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
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 2rem;
    }

    .dashboard-card {
      background-color: #ffffff;
      border: 1px solid #c9c3ff;
      border-radius: 16px;
      padding: 2rem 1rem;
      text-align: center;
      text-decoration: none;
      color: #2b0a41;
      transition: transform 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        padding: 2.2rem 1rem;
      }

      .card-icon {
        font-size: 2rem;
        color: #6e3f93;
        margin-bottom: 0.5rem;
      }

      .card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #2b0a41;
        margin-bottom: 0.5rem;
      }

      .card-description {
        font-size: 0.875rem;
        color: #666690;
        line-height: 1.4;
      }
    }
  }
}

html,
body,
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
}

.navbar-customized {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  padding: 0.75rem 1rem;
  color: white;
  box-shadow: none;
  border-radius: 0 0 16px 16px;

  .container-fluid {
    width: 100%;
    max-width: 100%;
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
  max-width: 100%;
  margin: 0 auto;
}

.footer {
  background-color: #f1f5f9;
  text-align: center;
  padding: 1rem;
  color: #6b7280;
  font-size: 0.9rem;
  box-shadow: none;
}

.card {
  width: 100%;
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #ffffff;
  margin-bottom: 0;
}

.card-header {
  background-color: #2b0a41;
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
  flex: 1;
  overflow-y: auto;
  margin-bottom: 0;
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

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
