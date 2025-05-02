<template>
  <div class="app-container">
    <Sidebar />

    <div class="voting-sessions-view">
      <div class="container">
        <h1 class="title">
          <i class="fas fa-clipboard-list me-2"></i> Sesiones de votación
          activas
        </h1>

        <div v-if="sessions.length === 0" class="text-muted text-center">
          No hay sesiones de votación activas en este momento.
        </div>

        <div v-else>
          <ul class="sessions-list">
            <li
              v-for="session in sessions"
              :key="session.id"
              class="session-item"
            >
              <span>{{ session.title }}</span>
              <div class="button-container">
                <button @click="openModal(session)" class="btn-edit">
                  <i class="fas fa-edit"></i> Editar
                </button>
                <router-link
                  :to="`/client/vote/${session.id}`"
                  class="btn-vote"
                >
                  <i class="fas fa-vote-yea"></i> Votar
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2 class="modal-title">Editar Sesión: {{ selectedSession.title }}</h2>
        <form @submit.prevent="submitEditedSession">
          <div class="form-group">
            <label for="session-title">Título de la sesión</label>
            <input
              id="session-title"
              v-model="selectedSession.title"
              type="text"
              class="form-control"
              required
            />
          </div>

          <div class="modal-actions">
            <button type="submit" class="save-btn">
              <i class="fas fa-save"></i> Guardar
            </button>
            <button @click="closeModal" class="close-btn">
              <i class="fas fa-times-circle"></i> Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      sessions: [
        { id: 1, title: 'Votación sobre el proyecto de ley A' },
        { id: 2, title: 'Votación sobre el presupuesto de la comunidad' },
        { id: 3, title: 'Votación sobre el nuevo parque local' },
        { id: 4, title: 'Votación sobre la mejora de servicios de transporte' },
        { id: 5, title: 'Votación sobre la creación de un centro cultural' },
      ],
      showModal: false,
      selectedSession: null,
    };
  },
  methods: {
    openModal(session) {
      this.selectedSession = { ...session };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedSession = null;
    },
    submitEditedSession() {
      const index = this.sessions.findIndex(
        (session) => session.id === this.selectedSession.id
      );
      if (index !== -1) {
        this.sessions[index] = { ...this.selectedSession };
      }
      this.closeModal();
    },
  },
};
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
}

.voting-sessions-view {
  padding: 1.5rem;
  flex-grow: 1;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 1.2rem;
}

.title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2b0a41;
  text-align: center;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #2b0a41;
  padding-bottom: 0.4rem;
}

.text-muted {
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 1.5rem;
}

.sessions-list {
  list-style-type: none;
  padding: 0;

  .session-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 12px; /* Esquinas curvas */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.8rem;
    padding: 0.8rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f4ff;
    }

    span {
      font-size: 0.95rem;
      font-weight: 600;
    }

    .button-container {
      display: flex;
      gap: 0.8rem;
    }

    .btn-vote {
      background: #2b0a41;
      color: white;
      padding: 0.4rem 1rem;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.3s ease;
      display: flex;
      align-items: center;

      i {
        margin-right: 0.5rem;
      }

      &:hover {
        background: linear-gradient(45deg, #5a36a0, #2b0a41);
      }
    }

    .btn-edit {
      background-color: #7a7a7a; /* Color gris neutro */
      color: white;
      padding: 0.4rem 1rem;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background 0.3s ease;

      i {
        margin-right: 0.5rem;
      }

      &:hover {
        background-color: #5a5a5a; /* Color gris más oscuro en hover */
      }
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1.2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #2b0a41;
  display: block;
  margin-bottom: 0.4rem;
}

.form-control {
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 0.6rem;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.save-btn,
.close-btn {
  background-color: #5a36a0;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  width: 48%;

  i {
    margin-right: 0.5rem;
  }
}

.save-btn:hover {
  background-color: #2b0a41;
}

.close-btn {
  background-color: #e4e4e4;
  color: #2b0a41;
}

.close-btn:hover {
  background-color: #c4c4c4;
}
</style>
