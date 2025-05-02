<template>
  <div class="users-view">
    <!-- Sidebar Component -->
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

    <!-- Modal Mejorado -->
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
// Importa el componente AdminSidebar
import AdminSidebar from '@/components/Sidebar.vue';

export default {
  name: 'UsersView',
  components: {
    AdminSidebar, // Registra el componente Sidebar
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
  mounted() {
    this.loadUsers();
  },
  computed: {
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.users.slice(start, end);
    },
  },
  methods: {
    loadUsers() {
      this.users = [
        {
          id: 1,
          name: 'Juan Pérez',
          email: 'juan@example.com',
          role: 'Administrador',
        },
        {
          id: 2,
          name: 'Ana Gómez',
          email: 'ana@example.com',
          role: 'Usuario',
        },
        {
          id: 3,
          name: 'Carlos Ruiz',
          email: 'carlos@example.com',
          role: 'Moderador',
        },
        {
          id: 4,
          name: 'Marta López',
          email: 'marta@example.com',
          role: 'Usuario',
        },
        {
          id: 5,
          name: 'David García',
          email: 'david@example.com',
          role: 'Administrador',
        },
        {
          id: 6,
          name: 'Pedro Sánchez',
          email: 'pedro@example.com',
          role: 'Moderador',
        },
        {
          id: 7,
          name: 'Lucía Fernández',
          email: 'lucia@example.com',
          role: 'Usuario',
        },
        {
          id: 8,
          name: 'Javier Rodríguez',
          email: 'javier@example.com',
          role: 'Administrador',
        },
        {
          id: 9,
          name: 'Beatriz Martínez',
          email: 'beatriz@example.com',
          role: 'Moderador',
        },
        {
          id: 10,
          name: 'Luis Gómez',
          email: 'luis@example.com',
          role: 'Usuario',
        },
      ];
    },
    openEditModal(user) {
      this.editUserData = { ...user };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveEdit() {
      const index = this.users.findIndex((u) => u.id === this.editUserData.id);
      if (index !== -1) {
        this.users.splice(index, 1, { ...this.editUserData });
        this.closeModal();
      }
    },
    deleteUser(userId) {
      this.users = this.users.filter((u) => u.id !== userId);
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
    sortTable(field) {
      this.users.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      });
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage * this.usersPerPage < this.users.length)
        this.currentPage++;
    },
  },
};
</script>

<style scoped lang="scss">
.users-view {
  padding: 1.5rem;

  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0 1.2rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2b0a41;
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 3px solid #2b0a41;
    padding-bottom: 0.4rem;
  }

  .text-muted {
    font-size: 0.9rem;
    color: #6c757d;
    margin-top: 1.5rem;
  }

  .table-wrapper {
    overflow-x: auto;
    margin-top: 1.5rem;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    background: linear-gradient(to bottom, #fff, #f8f9fc);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    overflow: hidden;

    th,
    td {
      padding: 0.7rem;
      text-align: center;
      font-size: 0.85rem;
      cursor: pointer;
    }

    thead {
      background: linear-gradient(45deg, #2b0a41, #5a36a0);
      color: white;
    }

    tbody tr {
      border-bottom: 1px solid #f0f0f0;

      &:hover {
        background-color: #f9f4ff;
      }
    }
  }

  .badge {
    padding: 0.3rem 0.6rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: bold;
    display: inline-block;
    text-transform: capitalize;
  }

  .badge-admin {
    background-color: #2b0a41;
    color: white;
  }

  .badge-moderator {
    background-color: #17a2b8;
    color: white;
  }

  .badge-user {
    background-color: #ffc107;
    color: black;
  }

  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0.7rem;
    margin: 0 0.3rem;
    font-size: 0.9rem;
    border-radius: 8px;
    transition: background-color 0.2s;

    &.edit {
      color: #2b0a41;

      &:hover {
        background-color: #eae2f8;
      }
    }

    &.delete {
      color: #dc3545;

      &:hover {
        background-color: #fdeaea;
      }
    }
  }

  .pagination {
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .page-button {
      background-color: #2b0a41;
      color: white;
      padding: 0.3rem 0.8rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.8rem;

      &:hover {
        background-color: #5a36a0;
      }

      &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
      }
    }

    .page-info {
      font-size: 0.85rem;
      color: #333;
    }
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050;
    padding: 1rem;
  }

  .modal-card {
    background: #fff;
    padding: 1.2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 430px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    position: relative;
    font-size: 0.85rem;

    h3 {
      font-size: 1.1rem;
      color: #2b0a41;
      margin: 0;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      .close-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        color: #999;
        cursor: pointer;

        &:hover {
          color: #333;
        }
      }
    }

    .form-group {
      margin-bottom: 1.2rem;

      label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.4rem;
      }

      input,
      select {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 0.9rem;

        &:focus {
          border-color: #2b0a41;
          outline: none;
        }
      }
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1.3rem;

      .btn-confirm {
        background-color: #2b0a41;
        color: white;
        padding: 0.5rem 1.3rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background-color: #5a36a0;
        }
      }

      .btn-cancel {
        background-color: #f3f3f3;
        color: #555;
        padding: 0.5rem 1.3rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background-color: #e1e1e1;
        }
      }
    }
  }
}
</style>
