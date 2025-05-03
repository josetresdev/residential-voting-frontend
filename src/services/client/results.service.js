export default {
  getAllResults() {
    return [
      {
        id: 1,
        title: 'Elección de presidente de la junta de administración',
        start_date: '2025-05-01',
        end_date: '2025-05-10',
        candidates: [
          { name: 'Juan Pérez', votes: 120 },
          { name: 'Ana Gómez', votes: 98 },
          { name: 'Carlos Rodríguez', votes: 65 },
        ],
      },
      {
        id: 2,
        title: 'Votación para elegir secretario de la junta',
        start_date: '2025-04-25',
        end_date: '2025-05-05',
        candidates: [
          { name: 'Laura Fernández', votes: 142 },
          { name: 'Miguel Torres', votes: 107 },
        ],
      },
      {
        id: 3,
        title: 'Elección de tesorero de la junta de administración',
        start_date: '2025-05-02',
        end_date: '2025-05-15',
        candidates: [
          { name: 'Pedro Sánchez', votes: 110 },
          { name: 'María López', votes: 134 },
          { name: 'José Ramírez', votes: 82 },
        ],
      },
      {
        id: 4,
        title: 'Votación para elegir vocales',
        start_date: '2025-05-10',
        end_date: '2025-05-20',
        candidates: [
          { name: 'Luis Martínez', votes: 200 },
          { name: 'Ana Silva', votes: 155 },
        ],
      },
      {
        id: 5,
        title: 'Votación para modificar el reglamento',
        start_date: '2025-05-05',
        end_date: '2025-05-15',
        candidates: [
          { name: 'Sí', votes: 400 },
          { name: 'No', votes: 50 },
        ],
      },
    ];
  },

  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
  },

  getWinner(result) {
    return [...result.candidates].sort((a, b) => b.votes - a.votes)[0];
  },

  getPercentage(result, votes) {
    const totalVotes = result.candidates.reduce((sum, c) => sum + c.votes, 0);
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
  },
};
