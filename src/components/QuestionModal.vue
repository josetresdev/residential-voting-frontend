<template>
  <div>
    <h1>Vista de Preguntas</h1>
    <!-- Aquí donde utilices el modal -->
    <QuestionModal v-if="showModal" @close="showModal = false">
      <p>Contenido del modal</p>
    </QuestionModal>
    <button @click="showModal = true">Abrir Modal</button>
  </div>
</template>

<script>
// Importación correcta del componente
import QuestionModal from '@/components/QuestionModal.vue';

export default {
  name: 'QuestionsView',
  components: {
    QuestionModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para QuestionsView */
</style>
