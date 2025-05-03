<template>
  <div class="client-dashboard">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-balance-scale me-2"></i>
          Panel de votación
        </div>
        <div class="card-body">
          <h2 class="section-title">Bienvenido al sistema de votación</h2>
          <p class="text-muted">
            Elige una opción para votar o consulta los resultados de las
            votaciones activas.
          </p>

          <div class="action-buttons">
            <router-link
              to="/cliente/sesiones-votacion"
              class="btn btn-primary"
            >
              <i class="fas fa-check-circle me-2"></i> Votar
            </router-link>
            <router-link to="/cliente/resultados" class="btn btn-secondary">
              <i class="fas fa-chart-bar me-2"></i> Ver resultados
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clientDashboardService from '@/services/client/clientDashboard.service.js';

export default {
  name: 'ClientDashboard',
  mounted() {
    clientDashboardService.trackClientAccess();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/client/ClientDashboard.scss';
</style>
