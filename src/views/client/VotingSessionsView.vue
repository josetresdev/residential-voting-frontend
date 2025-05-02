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
.active-sessions {
  margin-top: 1rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  margin: 0 auto;
  min-height: 80vh;
}

.card {
  width: 100%;
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-header {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  border-radius: 16px 16px 0 0;
}

.card-body {
  padding: 1.5rem;
  background-color: #ffffff;
  text-align: center;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c9c3ff;
  padding-bottom: 0.5rem;
}

.text-muted {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.sessions-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.session-card {
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-title {
  font-size: 15px;
  color: #2b0a41;
  font-weight: 600;
}

.card-text {
  font-size: 11px;
  color: #6c757d;
}

.btn-primary {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  border-color: #2b0a41;
  color: white;
  width: 100%;
  max-width: 200px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #856ca0, #5e3ea1);
  border-color: #856ca0;
  transform: translateY(-2px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  backdrop-filter: blur(5px);
  opacity: 0;
  animation: modalFadeIn 0.5s forwards;
}

@keyframes modalFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.modal-content {
  background: #f9f9f9;
  padding: 0;
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  animation: modalSlideUp 0.5s forwards;
}

@keyframes modalSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #f8f9fa;
  font-weight: bold;
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  padding: 1rem;
  border-radius: 12px 12px 0 0;
}

.modal-header .btn-close {
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  background: transparent;
}

.modal-body {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #2b0a41;
  padding: 1em 5em;
}

.form-select {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-select:focus {
  border-color: #5e3ea1;
  box-shadow: 0 0 0 0.2rem rgba(94, 62, 161, 0.25);
}

.error-message {
  font-size: 0.9rem;
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
}

.modal-description {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
