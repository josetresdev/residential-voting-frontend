<template>
  <div class="app-container">
    <Sidebar />

    <div class="questions-view">
      <div class="container">
        <h1 class="title">
          <i class="fas fa-question-circle me-2"></i> Gestionar preguntas
        </h1>

        <div
          v-if="filteredQuestions.length === 0"
          class="text-muted text-center"
        >
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
              <tr
                v-for="(question, index) in filteredQuestions"
                :key="question.id"
              >
                <td>{{ index + 1 }}</td>
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

export default {
  name: 'QuestionsView',
  components: {
    Sidebar,
  },
  data() {
    return {
      questions: [
        { id: 1, text: '¿Qué opinas sobre la situación actual del país?' },
        { id: 2, text: '¿Cuál es tu meta personal para el próximo año?' },
        { id: 3, text: '¿Cómo evalúas la calidad de los servicios públicos?' },
        { id: 4, text: '¿Qué tan importante es para ti el medio ambiente?' },
        {
          id: 5,
          text: '¿Qué harías para mejorar la seguridad en tu comunidad?',
        },
      ],
      searchQuery: '',
      isModalOpen: false,
      currentQuestion: null,
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    filteredQuestions() {
      return this.questions
        .filter((question) =>
          question.text.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage
        );
    },
    totalPages() {
      return Math.ceil(this.questions.length / this.itemsPerPage);
    },
  },
  methods: {
    openEditModal(question) {
      this.currentQuestion = { ...question };
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    saveQuestion() {
      const index = this.questions.findIndex(
        (q) => q.id === this.currentQuestion.id
      );
      if (index !== -1) {
        this.questions.splice(index, 1, { ...this.currentQuestion });
        this.closeModal();
      } else {
        this.currentQuestion.id = Date.now();
        this.questions.push(this.currentQuestion);
        this.closeModal();
      }
    },
    deleteQuestion(id) {
      this.questions = this.questions.filter((question) => question.id !== id);
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Questions.scss';
</style>
