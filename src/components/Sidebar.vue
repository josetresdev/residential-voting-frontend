<template>
  <aside :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <i class="fas fa-tachometer-alt logo-icon"></i>
    </div>
    <button
      class="toggle-btn"
      @click="toggleSidebar"
      :title="collapsed ? 'Expandir' : 'Colapsar'"
    >
      <i :class="collapsed ? 'fas fa-bars' : 'fas fa-chevron-left'"></i>
    </button>

    <nav class="sidebar-nav">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-item"
        active-class="active"
      >
        <i :class="item.icon"></i>
        <span v-if="!collapsed" class="label">{{ item.title }}</span>
        <div class="tooltip" v-if="!collapsed">
          {{ item.title }}
        </div>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <button
        @click="logout"
        class="logout-button"
        :title="collapsed ? 'Cerrar sesión' : ''"
      >
        <i class="fas fa-sign-out-alt"></i>
        <span v-if="!collapsed" class="label">Cerrar sesión</span>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AdminSidebar',
  data() {
    return {
      collapsed: true,
      navItems: [
        {
          to: '/administrador/panel',
          title: 'Panel',
          icon: 'fas fa-tachometer-alt',
        },
        {
          to: '/administrador/usuarios',
          title: 'Usuarios',
          icon: 'fas fa-users',
        },
        {
          to: '/administrador/preguntas',
          title: 'Preguntas',
          icon: 'fas fa-question-circle',
        },
        {
          to: '/administrador/opciones',
          title: 'Opciones',
          icon: 'fas fa-list-ul',
        },
        {
          to: '/administrador/sesiones-votacion',
          title: 'Sesiones',
          icon: 'fas fa-calendar-alt',
        },
        {
          to: '/administrador/resultados',
          title: 'Resultados',
          icon: 'fas fa-chart-pie',
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    logout() {
      alert('Sesión cerrada');
      this.$router.push('/iniciar-sesion');
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/components/Sidebar.scss';
</style>
