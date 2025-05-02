<template>
  <div class="app-container">
    <Sidebar />

    <div class="questions-view">
      <div class="container">
        <h1 class="title">
          <i class="fas fa-question-circle me-2"></i> Opciones de pregunta
        </h1>

        <div v-if="questions.length === 0" class="text-muted text-center">
          No hay preguntas disponibles en este momento.
        </div>

        <div v-else>
          <ul class="questions-list">
            <li
              v-for="question in questions"
              :key="question.id"
              class="question-item"
            >
              <span>{{ question.title }}</span>
              <button @click="openModal(question)" class="btn-answer">
                Editar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal para editar y responder -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2 class="modal-title">
          Editar Pregunta: {{ selectedQuestion.title }}
        </h2>
        <form @submit.prevent="submitEditedQuestion">
          <div class="form-group">
            <label for="question-title">Título de la pregunta</label>
            <input
              id="question-title"
              v-model="selectedQuestion.title"
              type="text"
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <label for="question-options">Opciones de respuesta</label>
            <div
              v-for="(option, index) in selectedQuestion.options"
              :key="index"
              class="option-group"
            >
              <input
                type="text"
                v-model="selectedQuestion.options[index]"
                class="form-control"
                :placeholder="'Opción ' + (index + 1)"
                required
              />
              <button
                @click="removeOption(index)"
                type="button"
                class="remove-btn"
              >
                Eliminar
              </button>
            </div>
            <button @click="addOption" type="button" class="add-btn">
              Añadir opción
            </button>
          </div>

          <div class="modal-actions">
            <button type="submit" class="save-btn">Guardar Cambios</button>
            <button @click="closeModal" class="close-btn">Cancelar</button>
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
      questions: [
        {
          id: 1,
          title: '¿Cuál es tu opinión sobre el proyecto de ley A?',
          options: ['Sí', 'No', 'Tal vez'],
        },
        {
          id: 2,
          title: '¿Qué piensas sobre el presupuesto de la comunidad?',
          options: ['Sí', 'No', 'Tal vez'],
        },
        {
          id: 3,
          title: '¿Te gustaría ver un nuevo parque local en la ciudad?',
          options: ['Sí', 'No', 'Tal vez'],
        },
        {
          id: 4,
          title: '¿Qué opinas sobre la mejora de los servicios de transporte?',
          options: ['Sí', 'No', 'Tal vez'],
        },
        {
          id: 5,
          title: '¿Estás a favor de la creación de un centro cultural?',
          options: ['Sí', 'No', 'Tal vez'],
        },
      ],
      showModal: false,
      selectedQuestion: null,
    };
  },
  methods: {
    openModal(question) {
      this.selectedQuestion = { ...question }; // Clonamos para evitar mutar el original
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedQuestion = null;
    },
    submitEditedQuestion() {
      // Actualizamos la pregunta con las opciones editadas
      const index = this.questions.findIndex(
        (question) => question.id === this.selectedQuestion.id
      );
      if (index !== -1) {
        this.questions[index] = { ...this.selectedQuestion };
      }
      this.closeModal();
    },
    addOption() {
      this.selectedQuestion.options.push('');
    },
    removeOption(index) {
      if (this.selectedQuestion.options.length > 1) {
        this.selectedQuestion.options.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
}

.questions-view {
  padding: 1rem;
  flex-grow: 1;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 1.2rem;
}

.title {
  font-size: 1.1rem; /* Reducido el tamaño de fuente */
  font-weight: 600;
  color: #2b0a41;
  text-align: center;
  margin-bottom: 1.2rem;
  border-bottom: 3px solid #2b0a41;
  padding-bottom: 0.3rem;
}

.text-muted {
  font-size: 0.85rem; /* Reducido el tamaño de fuente */
  color: #6c757d;
  margin-top: 1.5rem;
}

.questions-list {
  list-style-type: none;
  padding: 0;

  .question-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Reducido el tamaño de la sombra */
    margin-bottom: 0.7rem;
    padding: 0.6rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f4ff;
    }

    span {
      font-size: 0.9rem; /* Reducido el tamaño de fuente */
      font-weight: 600;
    }

    .btn-answer {
      background-color: #2b0a41;
      color: white;
      padding: 0.4rem 0.8rem; /* Reducido el padding */
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.3s ease;

      &:hover {
        background-color: #5a36a0;
      }
    }
  }
}

/* Modal Styles */
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
  padding: 1.5rem; /* Reducido el padding */
  border-radius: 8px;
  width: 500px; /* Reducido el ancho */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1rem; /* Reducido el tamaño de fuente */
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1.2rem; /* Reducido el margen inferior */
}

.form-group {
  margin-bottom: 1rem; /* Reducido el margen */
}

label {
  font-size: 0.8rem; /* Reducido el tamaño de fuente */
  font-weight: 600;
  color: #2b0a41;
  display: block;
  margin-bottom: 0.4rem; /* Reducido el margen */
}

.form-control {
  width: 100%;
  padding: 0.6rem 1rem; /* Reducido el padding */
  font-size: 0.9rem; /* Reducido el tamaño de fuente */
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 0.6rem; /* Reducido el margen */
}

.option-group {
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem; /* Reducido el margen */
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 0.7rem;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.add-btn {
  background-color: #27ae60;
  color: white;
  padding: 0.5rem 1rem; /* Reducido el padding */
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  display: block;
  width: 100%;
  font-size: 0.7rem;
}

.add-btn:hover {
  background-color: #2ecc71;
}

.save-btn,
.close-btn {
  background-color: #5a36a0;
  color: white;
  padding: 0.6rem 1.2rem; /* Reducido el padding */
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.7rem; /* Reducido el tamaño de fuente */
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 1rem; /* Reducido el margen superior */
  width: 100%;
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
