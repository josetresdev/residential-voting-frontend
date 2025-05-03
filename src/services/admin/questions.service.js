let questions = [
  {
    id: 1,
    uuid: '5b7519b2-9582-46ae-a9a2-90408be404db',
    title: '¿Qué proyecto prefieres?',
    text: '¿Qué proyecto prefieres?',
    status: 'active',
  },
  {
    id: 3,
    uuid: '4cfde19c-eac8-4d26-8a97-6318f0d98b46',
    title: '¿Estás a favor de la propuesta?',
    text: '¿Estás a favor de la propuesta?',
    status: 'active',
  },
];

export default {
  getQuestions() {
    return [...questions];
  },

  saveQuestion(question) {
    if (!question || !question.text) return;
    const index = questions.findIndex((q) => q.id === question.id);
    if (index !== -1) {
      questions.splice(index, 1, { ...question });
    } else {
      question.id = Date.now();
      questions.push({ ...question });
    }
  },

  deleteQuestion(id) {
    const index = questions.findIndex((q) => q.id === id);
    if (index !== -1) {
      questions.splice(index, 1);
    }
  },

  filterQuestions(searchQuery) {
    const query = (searchQuery || '').toLowerCase();
    return questions.filter((q) => q.text.toLowerCase().includes(query));
  },

  paginateQuestions(filtered, page, perPage) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return filtered.slice(start, end);
  },

  getTotalPages(filtered, perPage) {
    return Math.ceil(filtered.length / perPage) || 1;
  },
};
