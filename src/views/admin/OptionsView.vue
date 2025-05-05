<template>
  <div class="app-container">
    <Sidebar />

    <div class="questions-view">
      <div class="container">
        <BaseBreadcrumb
          :crumbs="[
            { label: 'Inicio', to: '/' },
            { label: 'Opciones de pregunta' },
          ]"
        />

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
import BaseBreadcrumb from '@/components/CustomBreadcrumb.vue';
import optionsService from '@/services/admin/options.service.js';

export default {
  components: {
    Sidebar,
    BaseBreadcrumb,
  },
  data() {
    return {
      questions: [],
      showModal: false,
      selectedQuestion: null,
    };
  },
  created() {
    this.loadQuestions();
  },
  methods: {
    loadQuestions() {
      this.questions = optionsService.getOptions();
    },
    openModal(question) {
      this.selectedQuestion = { ...question };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedQuestion = null;
    },
    submitEditedQuestion() {
      const updatedQuestion = { ...this.selectedQuestion };

      if (
        !updatedQuestion ||
        !updatedQuestion.options ||
        !updatedQuestion.questionId
      )
        return;

      optionsService.saveOptions(updatedQuestion);

      this.loadQuestions();
      this.closeModal();
    },
    addOption() {
      if (this.selectedQuestion) {
        this.selectedQuestion.options.push('');
      }
    },
    removeOption(index) {
      if (this.selectedQuestion && this.selectedQuestion.options.length > 1) {
        this.selectedQuestion.options.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Options.scss';
</style>
