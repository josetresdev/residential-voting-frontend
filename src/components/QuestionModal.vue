<template>
  <div>
    <h1>Vista de Preguntas</h1>
    <QuestionModal v-if="showModal" @close="showModal = false">
      <p>Contenido del modal</p>
    </QuestionModal>
    <button @click="showModal = true">Abrir Modal</button>
  </div>
</template>

<script>
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
