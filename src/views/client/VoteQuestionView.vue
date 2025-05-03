<template>
  <div>
    <h2>{{ question.title }}</h2>
    <ul>
      <li v-for="option in question.options" :key="option.id">
        <button @click="vote(option.id)">{{ option.text }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import voteQuestionService from '@/services/client/voteQuestion.service';

export default {
  data() {
    return {
      question: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    const questionData = await voteQuestionService.getQuestion(id);
    if (questionData) {
      this.question = questionData;
    }
  },
  methods: {
    async vote(optionId) {
      const result = await voteQuestionService.vote(optionId);
      alert(result.message);
    },
  },
};
</script>
