<template>
  <div class="users-view">
    <AdminSidebar />
    <div class="container">
      <BaseBreadcrumb
        :crumbs="[
          { label: 'Panel de administración', to: '/administrador/panel' },
          { label: 'Gestión de usuarios' },
        ]"
      />
      <div class="header-actions">
        <button class="btn-filters" @click="toggleFilters">
          <i class="fas fa-filter"></i> Desplegar filtros
        </button>
        <button class="btn-create" @click="openCreateModal">
          <i class="fas fa-plus"></i> Crear nuevo
        </button>
      </div>
      <div :class="['filters-panel', { open: showFilters }]">
        <AdminFilters
          :filterFields="filterFields"
          @apply-filters="applyFilters"
        />
      </div>
      <h1 class="title">
        <i class="fas fa-users me-2"></i> Gestión de usuarios
      </h1>
      <!-- Tabla de usuarios -->
      <div v-if="users.length === 0" class="text-muted text-center">
        No hay usuarios disponibles.
      </div>
      <div v-else class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th @click="sortTable('id')">#</th>
              <th @click="sortTable('name')">Nombre</th>
              <th @click="sortTable('email')">Email</th>
              <th @click="sortTable('role')">Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in paginatedUsers" :key="user.id">
              <td>{{ index + 1 }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <span :class="['badge', getRoleClass(user.role)]">
                  {{ user.role }}
                </span>
              </td>
              <td>
                <UserAdminActions
                  :userId="user.id"
                  :onView="openViewModal"
                  :onEdit="openEditModal"
                  :onDelete="deleteUser"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button
            class="page-button"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            Anterior
          </button>
          <span class="page-info">Página {{ currentPage }}</span>
          <button
            class="page-button"
            :disabled="currentPage * usersPerPage >= users.length"
            @click="nextPage"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/Sidebar.vue';
import BaseBreadcrumb from '@/components/CustomBreadcrumb.vue';
import UserAdminActions from '@/components/UserAdminActions.vue';
import AdminFilters from '@/components/AdminFilters.vue';
import userService from '@/services/admin/users.service.js';

export default {
  name: 'UsersView',
  components: { AdminSidebar, BaseBreadcrumb, UserAdminActions, AdminFilters },
  data() {
    return {
      users: [],
      showFilters: false,
      currentPage: 1,
      usersPerPage: 5,
      filterFields: [
        {
          name: 'role',
          label: 'Rol',
          type: 'select',
          options: [
            { value: '', text: 'Seleccione un rol' },
            { value: 'Administrador', text: 'Administrador' },
            { value: 'Usuario', text: 'Usuario' },
            { value: 'Moderador', text: 'Moderador' },
          ],
        },
        {
          name: 'name',
          label: 'Nombre',
          type: 'text',
          placeholder: 'Ingrese el nombre',
        },
        {
          name: 'email',
          label: 'Correo',
          type: 'email',
          placeholder: 'Ingrese el correo',
        },
      ],
    };
  },
  computed: {
    // Calcula los usuarios paginados
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.users.slice(start, end);
    },
  },
  methods: {
    async loadUsers() {
      // Cargar los usuarios (mock o desde el servicio real)
      this.users = await userService.getUsers();
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    applyFilters(filters) {
      console.log('Aplicar filtros:', filters);
      // Puedes aplicar filtros aquí si es necesario
    },
    openCreateModal() {
      console.log('Crear nuevo usuario');
    },
    sortTable(field) {
      // Método para ordenar la tabla
      this.users = userService.sortUsers(this.users, field);
    },
    nextPage() {
      if (this.currentPage * this.usersPerPage < this.users.length) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    getRoleClass(role) {
      switch (role) {
        case 'Administrador':
          return 'badge-admin';
        case 'Moderador':
          return 'badge-moderator';
        case 'Usuario':
        default:
          return 'badge-user';
      }
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Users.scss';

.filters-panel {
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease, transform 0.3s ease;
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;

  &.open {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
    margin-bottom: 1rem;
  }
}
</style>
