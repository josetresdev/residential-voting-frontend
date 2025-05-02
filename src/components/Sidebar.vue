<template>
  <aside :class="['sidebar', { collapsed }]">
    <div class="sidebar-header">
      <i class="fas fa-home logo-icon"></i>
    </div>
    <button
      class="toggle-btn"
      @click="toggleSidebar"
      :title="collapsed ? 'Expandir' : 'Colapsar'"
    >
      <i :class="collapsed ? 'fas fa-arrow-right' : 'fas fa-arrow-left'"></i>
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
          to: '/admin/users',
          title: 'Usuarios',
          icon: 'fas fa-users',
        },
        {
          to: '/admin/questions',
          title: 'Preguntas',
          icon: 'fas fa-question-circle',
        },
        {
          to: '/admin/options',
          title: 'Opciones',
          icon: 'fas fa-list-ul',
        },
        {
          to: '/admin/sessions',
          title: 'Sesiones',
          icon: 'fas fa-calendar-alt',
        },
        {
          to: '/admin/results',
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
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  width: 72px;
  transition: width 0.3s ease;
  height: 100vh;
  background-color: #2b0a41;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 1rem 0.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  overflow: hidden;

  &.collapsed {
    width: 56px;

    .nav-item i,
    .logout-button i,
    .toggle-btn i {
      font-size: 1.1rem;
    }

    .label {
      display: none;
    }
  }

  &:not(.collapsed) {
    width: 200px;
  }

  .sidebar-header {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    .logo-icon {
      font-size: 2rem;
      color: #c9c3ff;
    }
  }

  .toggle-btn {
    background: none;
    border: none;
    color: #c9c3ff;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background-color: #3e215d;
    }
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0 0.5rem;
      height: 40px;
      border-radius: 12px;
      color: #eae8f6;
      font-size: 1.1rem;
      transition: background 0.2s, color 0.2s;
      text-decoration: none;
      position: relative;

      i {
        width: 24px;
        text-align: center;
        text-decoration: none;
      }

      .label {
        white-space: nowrap;
        font-size: 0.85rem;
        color: #eae8f6;
        transition: color 0.2s ease;
        text-decoration: none;

        &:hover {
          color: #ffffff;
        }
      }

      .tooltip {
        position: absolute;
        background-color: #3e215d;
        color: white;
        padding: 0.3rem 0.6rem;
        border-radius: 5px;
        font-size: 0.85rem;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        pointer-events: none;
        z-index: 100;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
      }

      &:hover {
        background-color: #3e215d;
        color: #ffffff;
        text-decoration: none;
      }

      &.active {
        background-color: #56317a;
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .sidebar-footer {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    .logout-button {
      background: none;
      border: none;
      color: #c9c3ff;
      cursor: pointer;
      font-size: 1.1rem;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0 0.5rem;
      text-decoration: none;

      i {
        width: 24px;
        text-align: center;
        text-decoration: none;
      }

      .label {
        white-space: nowrap;
        font-size: 0.85rem;
        color: #c9c3ff;
        transition: color 0.2s ease;
        text-decoration: none;

        &:hover {
          color: #ffffff;
        }
      }

      &:hover {
        background-color: #3e215d;
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
