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
.app-container {
  display: flex;
}

.questions-view {
  padding: 1.5rem;
  flex-grow: 1;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 1rem;
}

.title {
  font-size: 1.2rem; /* Ajustado para un tamaño más pequeño */
  font-weight: bold;
  color: #2b0a41;
  text-align: center;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #2b0a41;
  padding-bottom: 0.5rem;
}

.text-muted {
  font-size: 0.75rem; /* Ajustado para un tamaño más pequeño */
  color: #6c757d;
  margin-top: 1.5rem;
}

.table-wrapper {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 1rem;

  th td {
    padding: 0.8rem;
    text-align: center;
    font-size: 0.85rem; /* Ajustado para un tamaño más pequeño */
  }

  thead {
    background: linear-gradient(135deg, #2b0a41, #5a36a0);
    color: white;

    th {
      font-weight: 600;
    }
  }

  tbody tr {
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #f9f4ff;
    }
  }
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  margin: 0 0.2rem;
  font-size: 0.85rem; /* Ajustado para un tamaño más pequeño */
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

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
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
  padding: 1.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  position: relative;

  h3 {
    font-size: 1.1rem; /* Ajustado para un tamaño más pequeño */
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
      font-size: 1rem; /* Ajustado para un tamaño más pequeño */
      color: #999;
      cursor: pointer;

      &:hover {
        color: #333;
      }
    }
  }

  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.6rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 0.85rem; /* Ajustado para un tamaño más pequeño */

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
    margin-top: 1.2rem;

    .btn-confirm {
      background-color: #2b0a41;
      color: white;
      padding: 0.5rem 1.2rem;
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
      padding: 0.5rem 1.2rem;
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .btn-pagination {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    font-size: 0.85rem; /* Ajustado para un tamaño más pequeño */
    border: none;
    border-radius: 8px;
    background-color: #2b0a41;
    color: white;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
    }

    &:hover:not(:disabled) {
      background-color: #5a36a0;
    }
  }
}
</style>
