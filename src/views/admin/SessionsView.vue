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
@import '@/assets/styles/admin/Sessions.scss';
</style>
