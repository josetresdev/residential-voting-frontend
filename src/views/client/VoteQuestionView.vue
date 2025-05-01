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
export default {
  data() {
    return {
      question: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await fetch(`/api/questions/${id}`);
    this.question = await res.json();
  },
  methods: {
    async vote(optionId) {
      await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ option_id: optionId }),
      });
      alert('Voto registrado');
    },
  },
};
</script>
