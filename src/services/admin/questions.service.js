let questions = [
  {
    id: 1,
    text: '¿Qué opinas sobre la situación actual del país?',
  },
  {
    id: 2,
    text: '¿Cuál es tu meta personal para el próximo año?',
  },
  {
    id: 3,
    text: '¿Cómo evalúas la calidad de los servicios públicos?',
  },
  {
    id: 4,
    text: '¿Qué tan importante es para ti el medio ambiente?',
  },
  {
    id: 5,
    text: '¿Qué harías para mejorar la seguridad en tu comunidad?',
  },
  {
    id: 6,
    text: '¿Crees que la educación debería ser gratuita en todos los niveles?',
  },
  {
    id: 7,
    text: '¿Qué propuestas tienes para mejorar el transporte público?',
  },
  {
    id: 8,
    text: '¿Qué tan satisfecho estás con el sistema de salud actual?',
  },
  {
    id: 9,
    text: '¿Cuál es tu postura respecto al teletrabajo a largo plazo?',
  },
  {
    id: 10,
    text: '¿Qué actividades promueves para cuidar el medio ambiente?',
  },
];

export default {
  getQuestions() {
    return [...questions]; // Retorna una copia para evitar mutación accidental
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
