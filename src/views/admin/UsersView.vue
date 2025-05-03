<template>
  <div class="users-view">
    <AdminSidebar />

    <div class="container">
      <h1 class="title">
        <i class="fas fa-users me-2"></i> Gestión de usuarios
      </h1>

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
                <button class="icon-button edit" @click="openEditModal(user)">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="icon-button delete" @click="deleteUser(user.id)">
                  <i class="fas fa-trash"></i>
                </button>
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

    <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
      <transition name="fade-scale">
        <div class="modal-card" v-show="showModal">
          <div class="modal-header">
            <h3><i class="fas fa-user-edit me-2"></i>Editar usuario</h3>
            <button class="close-btn" @click="closeModal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <form @submit.prevent="saveEdit">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                v-model="editUserData.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="editUserData.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="role">Rol</label>
              <select id="role" v-model="editUserData.role" required>
                <option disabled value="">Seleccione un rol</option>
                <option>Administrador</option>
                <option>Usuario</option>
                <option>Moderador</option>
              </select>
            </div>
            <div class="actions">
              <button type="submit" class="btn-confirm">
                <i class="fas fa-save me-1"></i> Guardar
              </button>
              <button type="button" class="btn-cancel" @click="closeModal">
                <i class="fas fa-times-circle me-1"></i> Cancelar
              </button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/Sidebar.vue';
import userService from '@/services/admin/users.service.js';

export default {
  name: 'UsersView',
  components: {
    AdminSidebar,
  },
  data() {
    return {
      users: [],
      showModal: false,
      editUserData: {
        id: null,
        name: '',
        email: '',
        role: '',
      },
      currentPage: 1,
      usersPerPage: 5,
    };
  },
  computed: {
    paginatedUsers() {
      return userService.paginateUsers(
        this.users,
        this.currentPage,
        this.usersPerPage
      );
    },
  },
  methods: {
    async loadUsers() {
      this.users = await userService.getUsers();
    },
    openEditModal(user) {
      this.editUserData = { ...user };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveEdit() {
      this.users = userService.updateUser(this.users, this.editUserData);
      this.closeModal();
    },
    deleteUser(userId) {
      this.users = userService.deleteUser(this.users, userId);
    },
    getRoleClass(role) {
      return userService.getRoleClass(role);
    },
    sortTable(field) {
      this.users = userService.sortUsers(this.users, field);
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage * this.usersPerPage < this.users.length)
        this.currentPage++;
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Users.scss';
</style>
