<template>
  <div class="app-container">
    <Sidebar />

    <div class="questions-view">
      <div class="container">
        <h1 class="title">
          <i class="fas fa-question-circle me-2"></i> Gestionar preguntas
        </h1>

        <div v-if="paginated.length === 0" class="text-muted text-center">
          Actualmente no tienes preguntas disponibles. Por favor, agrega
          algunas.
        </div>

        <div v-else class="table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Pregunta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(question, index) in paginated" :key="question.id">
                <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
                <td>{{ question.text }}</td>
                <td>
                  <button
                    class="icon-button edit"
                    @click="openEditModal(question)"
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                  <button
                    class="icon-button delete"
                    @click="deleteQuestion(question.id)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pagination">
          <button
            class="btn-pagination"
            @click="previousPage"
            :disabled="currentPage === 1"
          >
            Anterior
          </button>
          <button
            class="btn-pagination"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div v-if="isModalOpen" class="modal-backdrop" @click.self="closeModal">
        <transition name="fade-scale">
          <div class="modal-card" v-show="isModalOpen">
            <div class="modal-header">
              <h3>
                <i class="fas fa-question-circle me-2"></i> Editar pregunta
              </h3>
              <button class="close-btn" @click="closeModal">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <form @submit.prevent="saveQuestion">
              <div class="form-group">
                <label for="questionText">Pregunta</label>
                <input
                  type="text"
                  id="questionText"
                  v-model="currentQuestion.text"
                  required
                />
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
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import questionsService from '@/services/admin/questions.service.js';

export default {
  name: 'QuestionsView',
  components: {
    Sidebar,
  },
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
      filtered: [],
      paginated: [],
      totalPages: 1,
      isModalOpen: false,
      currentQuestion: null,
    };
  },
  mounted() {
    this.refreshQuestions();
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
      this.refreshQuestions();
    },
  },
  methods: {
    refreshQuestions() {
      const filtered = questionsService.filterQuestions(this.searchQuery);
      const paginated = questionsService.paginateQuestions(
        filtered,
        this.currentPage,
        this.itemsPerPage
      );
      this.totalPages = questionsService.getTotalPages(
        filtered,
        this.itemsPerPage
      );
      this.filtered = filtered;
      this.paginated = paginated;

      console.log('🔎 Paginated:', this.paginated);
    },

    openEditModal(question) {
      this.currentQuestion = { ...question };
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    saveQuestion() {
      questionsService.saveQuestion(this.currentQuestion);
      this.closeModal();
      this.refreshQuestions();
    },

    deleteQuestion(id) {
      questionsService.deleteQuestion(id);
      this.refreshQuestions();
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.refreshQuestions();
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.refreshQuestions();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Questions.scss';
</style>
