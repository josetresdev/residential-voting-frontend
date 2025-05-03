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
        <router-link
          v-for="item in dashboardItems"
          :key="item.id"
          :to="item.route"
          class="dashboard-card"
        >
          <i :class="item.icon + ' card-icon'"></i>
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-description">{{ item.description }}</p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import adminDashboardService from '@/services/admin/adminDashboard.service.js';

export default {
  name: 'AdminDashboard',
  components: {
    Sidebar,
  },
  data() {
    return {
      dashboardItems: [],
    };
  },
  created() {
    this.loadDashboardItems();
  },
  methods: {
    loadDashboardItems() {
      this.dashboardItems = adminDashboardService.getDashboardItems();
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/AdminDashboard.scss';
</style>
