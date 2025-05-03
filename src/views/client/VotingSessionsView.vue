<template>
  <div class="active-sessions">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-clipboard-list me-2"></i>
          Elecciones de la junta de administración
        </div>
        <div class="card-body">
          <h2 class="section-title">Elecciones disponibles para votar</h2>
          <p class="text-muted">
            Selecciona una elección para ver los candidatos y emitir tu voto.
          </p>

          <div v-if="sessions.length > 0">
            <div class="sessions-gallery">
              <div
                v-for="session in sessions"
                :key="session.id"
                class="session-card card"
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="fas fa-clipboard-list me-2"></i>
                    {{ session.title }}
                  </h5>
                  <p class="card-text">
                    <strong>Fecha de inicio:</strong>
                    {{ formatDate(session.start_date) }}
                    <br />
                    <strong>Fecha de cierre:</strong>
                    {{ formatDate(session.end_date) }}
                  </p>
                  <button class="btn btn-primary" @click="openModal(session)">
                    <i class="fas fa-vote-yea me-2"></i> Votar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p v-else class="text-muted">
            No hay elecciones activas en este momento.
          </p>

          <p v-if="error" class="error-message">
            {{ error }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <i class="fas fa-clipboard-list me-2"></i> Elección
          </h4>
          <button @click="closeModal" class="btn-close">
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-description">
            Aquí puedes votar por los candidatos de la elección
            {{ currentSession.title }}.
          </p>
          <form @submit.prevent="submitVote">
            <div
              v-for="(question, index) in currentSession.questions"
              :key="index"
              class="mb-4"
            >
              <label :for="'question-' + index" class="form-label">
                <i class="fas fa-question-circle me-2"></i>{{ question.text }}
              </label>
              <select
                v-model="answers[index]"
                :id="'question-' + index"
                class="form-select"
                required
              >
                <option disabled value="">Selecciona una opción</option>
                <option
                  v-for="option in question.options"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-success">
                <i class="fas fa-check-circle me-2"></i> Votar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessions: [
        {
          id: 1,
          title: 'Elección de presidente de la junta de administración',
          start_date: '2025-05-01',
          end_date: '2025-05-10',
          questions: [
            {
              text: '¿Quién debe ser el nuevo presidente de la junta?',
              options: ['Juan Pérez', 'Ana Gómez', 'Carlos Rodríguez'],
            },
            {
              text: '¿Aprobar el presupuesto de mantenimiento 2025?',
              options: ['Sí', 'No'],
            },
          ],
        },
        {
          id: 2,
          title: 'Votación para elegir secretario de la junta',
          start_date: '2025-04-25',
          end_date: '2025-05-05',
          questions: [
            {
              text: '¿Aprobar al candidato para secretario de la junta?',
              options: ['Sí', 'No'],
            },
          ],
        },
        {
          id: 3,
          title: 'Elección de tesorero de la junta de administración',
          start_date: '2025-05-02',
          end_date: '2025-05-15',
          questions: [
            {
              text: '¿Quién debe ser el nuevo tesorero de la junta?',
              options: ['Pedro Sánchez', 'María López', 'José Ramírez'],
            },
          ],
        },
        {
          id: 4,
          title: 'Votación para elegir vocales',
          start_date: '2025-05-10',
          end_date: '2025-05-20',
          questions: [
            {
              text: '¿Aprobar los nuevos vocales propuestos?',
              options: ['Sí', 'No'],
            },
          ],
        },
        {
          id: 5,
          title: 'Votación para modificar el reglamento',
          start_date: '2025-05-05',
          end_date: '2025-05-15',
          questions: [
            {
              text: '¿Aprobar la modificación del reglamento?',
              options: ['Sí', 'No'],
            },
          ],
        },
        {
          id: 6,
          title: 'Elección de representante ante la asamblea',
          start_date: '2025-04-30',
          end_date: '2025-05-10',
          questions: [
            {
              text: '¿Quién debe ser el representante ante la asamblea?',
              options: ['Laura Fernández', 'Carlos Mendoza', 'Ana Silva'],
            },
          ],
        },
        {
          id: 7,
          title: 'Elección de presidente del comité de seguridad',
          start_date: '2025-04-15',
          end_date: '2025-04-30',
          questions: [
            {
              text: '¿Quién debe ser el presidente del comité de seguridad?',
              options: ['Juan Martín', 'Isabel Cruz', 'Ricardo Díaz'],
            },
          ],
        },
        {
          id: 8,
          title: 'Votación sobre el presupuesto de eventos',
          start_date: '2025-04-28',
          end_date: '2025-05-05',
          questions: [
            {
              text: '¿Aprobar el presupuesto de eventos 2025?',
              options: ['Sí', 'No'],
            },
          ],
        },
      ],
      currentSession: null,
      isModalOpen: false,
      answers: [],
      error: null,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    openModal(session) {
      this.currentSession = session;
      this.answers = new Array(session.questions.length).fill('');
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitVote() {
      console.log('Voto enviado:', this.answers);
      this.closeModal();
      alert('Voto registrado correctamente');
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/client/VoitingSessions.scss';
</style>
