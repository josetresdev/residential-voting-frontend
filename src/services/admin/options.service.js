let optionsData = [
  {
    id: 1,
    questionId: 1,
    title: '¿Cuál es tu opinión sobre el proyecto de ley A?',
    options: ['Sí', 'No', 'Tal vez'],
  },
  {
    id: 2,
    questionId: 2,
    title: '¿Qué piensas sobre el presupuesto de la comunidad?',
    options: ['Estudiar más', 'Viajar más', 'Ahorrar más'],
  },
  {
    id: 3,
    questionId: 3,
    title: '¿Te gustaría ver un nuevo parque local en la ciudad?',
    options: ['Excelente', 'Bueno', 'Regular', 'Malo'],
  },
  {
    id: 4,
    questionId: 4,
    title: '¿Qué opinas sobre la mejora de los servicios de transporte?',
    options: [
      'Muy importante',
      'Importante',
      'Poco importante',
      'Nada importante',
    ],
  },
  {
    id: 5,
    questionId: 5,
    title: '¿Estás a favor de la creación de un centro cultural?',
    options: ['Más patrullas', 'Instalar cámaras', 'Educación en seguridad'],
  },
];

export default {
  getOptions() {
    return optionsData;
  },

  saveOptions(updatedQuestion) {
    if (
      !updatedQuestion ||
      !updatedQuestion.options ||
      !updatedQuestion.questionId
    )
      return;

    const index = optionsData.findIndex(
      (opt) => opt.questionId === updatedQuestion.questionId
    );

    if (index !== -1) {
      optionsData[index] = {
        ...optionsData[index],
        options: [...updatedQuestion.options],
      };
    } else {
      optionsData.push({
        questionId: updatedQuestion.questionId,
        title: updatedQuestion.title,
        options: [...updatedQuestion.options],
      });
    }
  },

  deleteOption(questionId, index) {
    const questionOptions = optionsData.find(
      (opt) => opt.questionId === questionId
    );

    if (questionOptions && questionOptions.options.length > 1) {
      questionOptions.options.splice(index, 1);
    }
  },

  addOption(questionId) {
    const questionOptions = optionsData.find(
      (opt) => opt.questionId === questionId
    );

    if (questionOptions) {
      questionOptions.options.push('');
    }
  },

  filterOptions(query) {
    return optionsData.filter((opt) => {
      return opt.options.some((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      );
    });
  },

  paginateOptions(filtered, page, perPage) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return filtered.slice(start, end);
  },

  getTotalPages(filtered, perPage) {
    return Math.ceil(filtered.length / perPage) || 1;
  },
};
