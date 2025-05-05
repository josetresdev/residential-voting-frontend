<template>
  <div class="questions-view">
    <AdminSidebar />
    <div class="container">
      <BaseBreadcrumb
        :crumbs="[
          { label: 'Inicio', to: '/' },
          { label: 'Gestión de preguntas' },
        ]"
      />
      <div class="header-actions">
        <button class="btn-filters" @click="toggleFilters">
          <i class="fas fa-filter"></i> Desplegar filtros
        </button>
        <button class="btn-create" @click="openCreateModal">
          <i class="fas fa-plus"></i> Crear nueva
        </button>
      </div>

      <!-- Panel de filtros -->
      <div :class="['filters-panel', { open: showFilters }]">
        <AdminFilters
          :filterFields="filterFields"
          @apply-filters="applyFilters"
        />
      </div>

      <h1 class="title">
        <i class="fas fa-question-circle me-2"></i> Gestión de preguntas
      </h1>

      <!-- Tabla de preguntas -->
      <div v-if="paginated.length === 0" class="text-muted text-center">
        No hay preguntas disponibles.
      </div>
      <div v-else class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th @click="sortTable('id')">#</th>
              <th @click="sortTable('text')">Pregunta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(question, index) in paginated" :key="question.id">
              <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
              <td>{{ question.text }}</td>
              <td>
                <UserAdminActions
                  :userId="question.id"
                  :onView="openViewModal"
                  :onEdit="openEditModal"
                  :onDelete="deleteQuestion"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Paginación -->
        <div class="pagination">
          <button
            class="page-button"
            :disabled="currentPage === 1"
            @click="previousPage"
          >
            Anterior
          </button>
          <span class="page-info">Página {{ currentPage }}</span>
          <button
            class="page-button"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/Sidebar.vue';
import BaseBreadcrumb from '@/components/CustomBreadcrumb.vue';
import AdminFilters from '@/components/AdminFilters.vue';
import UserAdminActions from '@/components/UserAdminActions.vue';
import questionsService from '@/services/admin/questions.service.js';

export default {
  name: 'QuestionsView',
  components: {
    AdminSidebar,
    BaseBreadcrumb,
    AdminFilters,
    UserAdminActions,
  },
  data() {
    return {
      questions: [],
      filtered: [],
      showFilters: false,
      currentPage: 1,
      itemsPerPage: 5,
      filterFields: [
        {
          name: 'category',
          label: 'Categoría',
          type: 'select',
          options: [
            { value: '', text: 'Seleccione una categoría' },
            { value: 'tech', text: 'Tecnología' },
            { value: 'health', text: 'Salud' },
            { value: 'education', text: 'Educación' },
          ],
        },
        {
          name: 'text',
          label: 'Texto',
          type: 'text',
          placeholder: 'Ingrese el texto de la pregunta',
        },
      ],
    };
  },
  computed: {
    // Paginación de las preguntas
    paginated() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filtered.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filtered.length / this.itemsPerPage);
    },
  },
  methods: {
    loadQuestions() {
      questionsService.getQuestions().then((questions) => {
        this.questions = questions;
        this.filtered = [...questions]; // Inicializa el filtro con todos los usuarios
      });
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    applyFilters(filters) {
      console.log('Filtros aplicados:', filters);
      const filteredQuestions =
        questionsService.filterQuestions(filters.text) || [];
      this.filtered = Array.isArray(filteredQuestions) ? filteredQuestions : [];
      this.currentPage = 1;
    },
    openCreateModal() {
      console.log('Crear nueva pregunta');
    },
    openEditModal(question) {
      console.log('Editar pregunta', question);
    },
    deleteQuestion(id) {
      console.log('Eliminar pregunta con ID:', id);
      questionsService.deleteQuestion(id);
      this.loadQuestions();
    },
    sortTable(field) {
      console.log('Ordenar por:', field);
      // Aquí puedes implementar la lógica para ordenar las preguntas
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  mounted() {
    this.loadQuestions();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Questions.scss';

.filters-panel {
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease, transform 0.3s ease;
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;

  &.open {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
    margin-bottom: 1rem;
  }
}
</style>
