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
@import '@/assets/styles/admin/Options.scss';
</style>
